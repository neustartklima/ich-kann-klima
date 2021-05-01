export default function(el, answers, onChange, testParams = {}) {
  const document = el.ownerDocument
  const options = answers.map((answer) => {
    const selected = answer.co2 === 0 ? ' selected' : ''
    return `<option value="${answer.co2}"${selected}>${answer.text}</option>`
  }).join("\n")
  el.innerHTML = `<select>${options}</select><div class="handle"></div>`

  const select = el.querySelector("select")
  const handle = el.querySelector(".handle")
  const handleWidth = handle.clientWidth || testParams.handleWidth
  const left = el => el.offsetLeft + (el.offsetParent ? left(el.offsetParent) : 0)
  const clientLeft = left(el)
  const offset = el.offsetLeft || testParams.left
  const width = (el.clientWidth || testParams.width) - handleWidth
  let currentValue = 0

  select.addEventListener("change", update)
  el.addEventListener("mousedown", startSliderMove, { passive: true })
  el.addEventListener("touchstart", startSliderMove, { passive: true })

  const pos = select.selectedIndex / (select.options.length - 1)
  handle.setAttribute("style", "left: " + (pos * width + offset) + "px")
  setTimeout(update, 0)

  function selectedOption() {
    return select.options[select.selectedIndex]
  }

  function update() {
    const newValue = selectedOption().value
    onChange(currentValue - newValue)
    currentValue = newValue
  }

  function startSliderMove() {
    function handleMove(event) {
      event.preventDefault()
      const pos = Math.max(Math.min((event.clientX - clientLeft - handleWidth / 2) / width, 1), 0)
      handle.setAttribute("style", "left: " + (pos * width + offset) + "px")
      select.selectedIndex = Math.round(pos * (select.options.length - 1))
      update()
    }
  
    function removeHandler() {
      document.removeEventListener("mousemove", handleMove)
      document.removeEventListener("touchmove", handleMove)
    }
  
    document.addEventListener("mousemove", handleMove, { passive: false })
    document.addEventListener("touchmove", handleMove, { passive: false })
    document.addEventListener("mouseup", removeHandler, { passive: true, once: true })
    document.addEventListener("touchend", removeHandler, { passive: true, once: true })
  }

  return {
    getPosition: () => select.selectedIndex,
    getPercent: () => select.selectedIndex / (answers.length - 1),
    getValue: () => +selectedOption().value,
    getText: () => selectedOption().text,
  }
}
