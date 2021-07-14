type ParamDefinition = {
  name: string
}

type ParamKeys = "a" | "b"

const params: Record<ParamKeys, ParamDefinition> = {
  a: { name: "a", x: 1 },
  b: { name: "b" },
  c: 1,
}

type ParamDefinitions = Record<keyof typeof params, ParamDefinition>
type OldDefinition = typeof params

const p: ParamDefinitions = {}
