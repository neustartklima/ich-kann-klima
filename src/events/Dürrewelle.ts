import { defineEvent } from "../Factory"
import { markdown } from "../lib/utils"

export default defineEvent({
  title: "",
  description: ``,

  apply() {
    return []
  },

  probability() {
    return Math.random()
  },

  laws: [],
  citations: [],
  details: markdown`

  `,
  internals: markdown`

  `,
})
