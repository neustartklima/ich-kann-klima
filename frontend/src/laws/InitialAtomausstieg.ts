import { createLaw } from "../Factory"

export default createLaw({
  title: "Atomausstieg finded wie beschlossen 2022 statt",
  description: "",
  labels: ["hidden", "initial"],

  effects(data, startYear, currentYear) {
    const newValue = () => {
      if (currentYear == 2021) {
        return 60.45
      }
      if (currentYear == 2022) {
        return 30.21
      }
      return 0
    }
    return {
      electricityNuclear: newValue() - data.electricityNuclear,
    }
  },
})
