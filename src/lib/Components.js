const isBrowser = (new Function("try {return this===window;}catch(e){ return false;}"))()

export async function loadFile(name) {
  if (isBrowser) {
    const response = await fetch(name)
    const content = await response.text()
    if (response.ok) {
      return content
    }
    console.error(`'${name}' could not be loaded (${response.status} ${response.statusText})`, content)
  } else {
    const { readFileSync } = await import("fs")
    return readFileSync(name.replace(/^file:\/\/(\/([a-zA-Z]:\/))?/, "$2")).toString()
  }
}

export async function loadCss(name) {
  if (isBrowser) {
    const styleElement = document.createElement("style")
    styleElement.innerHTML = await loadFile(name)
    document.head.appendChild(styleElement)
  }
}
