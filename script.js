import Thermometer from "./Thermometer.js"

const elems = Object.assign({}, ...(["question", "infos", "slider", "result", "prev", "next", "restart", "capillary"]
  .map((id) => ({[id]: document.querySelector("#" + id)}))))

const selectedOption = () => elems.sliderSelect.options[elems.sliderSelect.selectedIndex]
const changeSlider = () => elems.result.innerText = selectedOption().innerText
let thermometer
    
elems.sliderSelect = elems.slider.querySelector("select")
elems.sliderSelect.addEventListener("change", changeSlider)
elems.sliderHandle = elems.slider.querySelector(".handle")
elems.slider.addEventListener("mousedown", startSliderMove, { passive: true })
elems.slider.addEventListener("touchstart", startSliderMove, { passive: true })

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
  const gotoPage = (pageNo) => handleQuestion(questions, questionNo = pageNo)
  
  preloadImages(questions.flatMap(q => q.images))
  thermometer = Thermometer(elems.capillary, questions)

  elems.prev.addEventListener("click", () => gotoPage(questionNo - 1), { passive: true })
  elems.next.addEventListener("click", () => gotoPage(questionNo + 1), { passive: true })
  elems.restart.addEventListener("click", () => {
    thermometer = Thermometer(elems.capillary, questions)
    gotoPage(0)
  }, { passive: true })

  handleQuestion(questions, questionNo = 0)
}

async function handleQuestion(questions, questionNo) {
  if (questionNo >= questions.length) {
    document.querySelectorAll(".city-img").forEach(el => el.remove())
    const img = "https://steemitimages.com/DQmTKDdDwzdnR35krM1TPjGYs2HMwEEZgxGdZPSwUU5es3q/green-city.jpg"
    addBgImg(img, true)
    document.body.classList.add("show-total-results")
  } else {
    document.body.classList.remove("show-total-results")

    const question = questions[questionNo]
    elems.question.innerText = question.question
    elems.infos.querySelector("p").innerText = question.detailsLink
    
    await replaceImages(question.images)
    await setupSlider(question.answers)

    elems.prev.disabled = questionNo === 0
  }
}

function addBgImg(img, isFirst) {
  const url = img.match(/^https?:\/\//) ? img : "img/" + img
  const container = document.createElement("div")
  container.setAttribute("class", "city-img")
  container.setAttribute("style", "opacity: " + (isFirst ? 1 : 0))
  const image = document.createElement("div")
  image.setAttribute("style", `background-image: url(${url})`)
  container.appendChild(image)
  document.body.appendChild(container)
}

async function replaceImages(images) {
  const oldImages = document.querySelectorAll(".city-img")
  images.forEach((img, index) => addBgImg(img, index === 0))
  oldImages.forEach(el => el.remove())
}

async function setupSlider(answers) {
  elems.sliderSelect.innerHTML = ''
  answers.forEach((answer) => {
    const option = document.createElement("option")
    option.innerText = answer.text
    option.setAttribute("value", answer.co2)
    elems.sliderSelect.appendChild(option)
  })
  elems.sliderSelect.selectedIndex = 0
  changeSlider()
  elems.sliderHandle.setAttribute("style", "left: " + elems.slider.offsetLeft + "px")
}

function startSliderMove() {
  const offset = elems.slider.offsetLeft
  const width = elems.slider.clientWidth - 40

  function handleMove(event) {
    const pos = Math.max(Math.min((event.clientX - offset) / width, 1), 0)
    elems.sliderHandle.setAttribute("style", "left: " + (pos * width + offset) + "px")
    thermometer.addCO2Reduction(+selectedOption().value)
    elems.sliderSelect.selectedIndex = Math.round(pos * (elems.sliderSelect.options.length - 1))
    thermometer.addCO2Reduction(-selectedOption().value)
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
    document.removeEventListener("touchmove", handleMove)
  }

  document.addEventListener("mousemove", handleMove, { passive: true })
  document.addEventListener("touchmove", handleMove, { passive: true })
  document.addEventListener("mouseup", removeHandler, { passive: true, once: true })
  document.addEventListener("touchup", removeHandler, { passive: true, once: true })
}

function preloadImages(images) {
  images.forEach((img) => {
    document.createElement("img").src = img.match(/^https?:\/\//) ? img : "img/" + img
  })
}
