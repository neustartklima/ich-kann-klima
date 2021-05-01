import Thermometer from "./components/Thermometer.js"
import Slider from "./components/Slider.js"
import CO2Value from "./CO2Value.js"

const elems = Object.assign({}, ...(["question", "infos", "slider", "result", "prev", "next", "restart", "thermometer"]
  .map((id) => ({[id]: document.querySelector("#" + id)}))))

let thermometer
let slider
let co2Value

function sliderChange(change) {
  co2Value.add(change)
  elems.result.innerText = slider.getText()
  const images = document.querySelectorAll(".city-img")
  images.forEach((img, index) => {
    const opacity = Math.max(0, 1 - Math.abs(slider.getPercent() * (images.length - 1) - index))
    const style = img.getAttribute("style").replace(/opacity: [\d.]+/, "opacity: " + opacity)
    img.setAttribute("style", style)
  })
}

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
  co2Value = CO2Value(questions)
  thermometer = await Thermometer(elems.thermometer, co2Value)

  elems.prev.addEventListener("click", () => gotoPage(questionNo - 1), { passive: true })
  elems.next.addEventListener("click", () => gotoPage(questionNo + 1), { passive: true })
  elems.restart.addEventListener("click", async () => {
    co2Value = CO2Value(questions)
    thermometer = await Thermometer(elems.thermometer, co2Value)
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
    slider = Slider(document.getElementById("slider"), question.answers, sliderChange)

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

function preloadImages(images) {
  images.forEach((img) => {
    document.createElement("img").src = img.match(/^https?:\/\//) ? img : "img/" + img
  })
}
