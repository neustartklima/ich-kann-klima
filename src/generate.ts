import fs from "fs"
import path from "path"

const eventsDir = path.resolve(__dirname, "src", "events")

const template = `import { defineEvent } from "../Factory"
import { linear } from "../lawTools"
import { idsToLaws, Law } from "../laws"
{{functions}}
export default defineEvent({
  title: "{{title}}",
  description:
    "{{description}}",

  laws: [{{laws}}],

  apply(context) {{{apply}}},

  probability(game) {{{probability}}},
})
`

function generateEvent(content: string): string {
  const parts = content.split(/#(.*?)\n/g)
  const vars = {
    title: parts[1].trim(),
    description: parts[2].replace(/\n/g, " ").trim(),
    laws: "",
    apply: "",
    probability: "return Math.random()",
    functions: "",
  }
  for (let i = 3; i < parts.length; i += 2) {
    const title = parts[i].replace(/^#/, "").trim()
    if (vars[title as keyof typeof vars] === undefined) {
      throw new Error(`Unknown sub title: ${title}`)
    }
    const value = parts[i + 1].trim()
    if (title === "laws") {
      vars.laws += "\n" + value.split(/\n/).filter(e => e).map(e => `    "${e.replace(/-/, "").trim()}",`).join("\n") + "\n  "
    } else {
      const cleanedValue = value.split("\n").filter(e => !e.match(/^```/)).map(e => `    ${e}`).join("\n")
      vars[title as keyof typeof vars] = "\n" + cleanedValue + "\n  "
    }
  }
  return template.replace(/{{(\w+)}}/gs, (match, key: keyof typeof vars) => vars[key])
}

fs.readdirSync(path.resolve(__dirname, "events")).forEach((file) => {
  if (file.match(/.md$/)) {
    const generated = generateEvent(fs.readFileSync(path.resolve("events", file)).toString())
    fs.writeFileSync(path.join(eventsDir, file.replace(".md", ".ts")), generated)
  }
})
