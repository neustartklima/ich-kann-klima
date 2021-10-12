declare module "seedrandom" {
  export function seedrandom(
    seed: string,
    options?: { state?: number[]; pass?: number; entropy?: number; nonExplicit?: boolean; returnArray?: boolean }
  ): () => number
}
