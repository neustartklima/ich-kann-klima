function numSequence(amount: number): number[] {
  if (amount > 0) {
    return [...Array(amount)].map((_, i) => i)
  } else {
    return []
  }
}

export function getZIndexes(numPlaces: number, centerPos: number): number[] {
  const descending = numPlaces - centerPos - 1
  return [...numSequence(centerPos), Math.max(centerPos, descending), ...numSequence(descending).reverse()]
}
