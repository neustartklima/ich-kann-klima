export default function(el, answers, onChange) {
  const offset = el.offsetLeft
  const width = el.clientWidth - 40
  const sliderSelect = el.querySelector("select")
  const sliderHandle = el.querySelector(".handle")
  let currentValue = 0

  sliderSelect.addEventListener("change", update)
  el.addEventListener("mousedown", startSliderMove, { passive: true })
  el.addEventListener("touchstart", startSliderMove, { passive: true })

  sliderSelect.innerHTML = ''
  answers.forEach((answer) => {
    const option = document.createElement("option")
    option.innerText = answer.text
    option.setAttribute("value", answer.co2)
    answer.co2 && option.setAttribute("selected", true)
    sliderSelect.appendChild(option)
  })
  sliderSelect.selectedIndex = 0
  sliderHandle.setAttribute("style", "left: " + offset + "px")
  setTimeout(update, 0)

  function selectedOption() {
    return sliderSelect.options[sliderSelect.selectedIndex]
  }

  function update() {
    const newValue = selectedOption().value
    onChange(currentValue - newValue)
    currentValue = newValue
  }

  function startSliderMove() {
    function handleMove(event) {
      const pos = Math.max(Math.min((event.clientX - offset) / width, 1), 0)
      sliderHandle.setAttribute("style", "left: " + (pos * width + offset) + "px")
      sliderSelect.selectedIndex = Math.round(pos * (sliderSelect.options.length - 1))
      update()
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

  return {
    getPosition: () => sliderSelect.selectedIndex,
    getPercent: () => sliderSelect.selectedIndex / (answers.length - 1),
    getValue: () => selectedOption().value,
    getText: () => selectedOption().innerText,
  }
}
