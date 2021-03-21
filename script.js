const elems = {
  question: document.querySelector("#question"),
  infos: document.querySelector("#infos"),
  slider: document.querySelector("#slider"),
  result: document.querySelector("#result"),
  prev: document.querySelector("#prev"),
  next: document.querySelector("#next"),
}

elems.sliderSelect = elems.slider.querySelector("select")
elems.sliderSelect.addEventListener("change", changeSlider)
elems.sliderHandle = elems.slider.querySelector(".handle")
elems.slider.addEventListener("mousedown", startSliderMove)

loadQuestions()
  .then(showQuestions)
  .catch((error) => console.error(error))

async function loadQuestions() {
  const response = await fetch("questions.json")
  if (!response.ok) {
    throw Error("Questions could not be loaded")
  } else {
    return await response.json()
  }
}

async function showQuestions(questions) {
  let questionNo = 0

  elems.prev.addEventListener("click", () => handleQuestion(questions, --questionNo))
  elems.next.addEventListener("click", () => handleQuestion(questions, ++questionNo))

  handleQuestion(questions, questionNo = 0)
}

async function handleQuestion(questions, questionNo) {
  const question = questions[questionNo]
  elems.question.innerText = question.question
  elems.infos.querySelector("p").innerText = question.detailsLink
  
  await replaceImages(question.images)
  await setupSlider(question.answers)

  elems.prev.disabled = questionNo === 0
  elems.next.disabled = questionNo === questions.length - 1
}

async function replaceImages(images) {
  const oldImages = document.querySelectorAll(".city-img")
  await Promise.all(images.map((img, index) => new Promise((resolve) => {
    const url = img.match(/^https?:\/\//) ? img : "img/" + img
    const container = document.createElement("div")
    container.setAttribute("class", "city-img")
    container.setAttribute("style", "opacity: " + (index === 0 ? 1 : 0))
    const image = document.createElement("div")
    image.setAttribute("style", `background-image: url(${url})`)
    container.appendChild(image)
    const bgImg = document.createElement("img")
    bgImg.addEventListener("load", () => resolve())
    bgImg.setAttribute("src", url)
    document.body.appendChild(container)
  })))
  oldImages.forEach(el => el.remove())
}

async function setupSlider(answers) {
  elems.sliderSelect.innerHTML = ''
  answers.forEach((answer) => {
    const option = document.createElement("option")
    option.innerText = answer
    elems.sliderSelect.appendChild(option)
  })
  elems.sliderSelect.selectedIndex = 0
  changeSlider()
}

function changeSlider() {
  elems.result.innerText = elems.sliderSelect.options[elems.sliderSelect.selectedIndex].innerText
}

function startSliderMove() {
  const offset = elems.slider.offsetLeft
  const width = elems.slider.clientWidth - 40

  function handleMove(event) {
    const pos = Math.max(Math.min((event.clientX - offset) / width, 1), 0)
    elems.sliderHandle.setAttribute("style", "left: " + (pos * width + offset) + "px")
    elems.sliderSelect.selectedIndex = Math.round(pos * (elems.sliderSelect.options.length - 1))
    changeSlider()
    const images = document.querySelectorAll(".city-img")
    images.forEach((img, index) => {
      const opacity = Math.max(0, 1 - Math.abs(pos * (images.length - 1) - index))
      const style = img.getAttribute("style").replace(/opacity: [\d.]+/, "opacity: " + opacity)
      img.setAttribute("style", style)
    })
  }

  function removeHandler() {
    document.removeEventListener("mousemove", handleMove)
    document.removeEventListener("mouseup", removeHandler)
  }

  document.addEventListener("mousemove", handleMove)
  document.addEventListener("mouseup", removeHandler)
}
