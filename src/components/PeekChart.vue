<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/runtime-core"
import { ApexOptions } from "apexcharts"
import { calculateNextYear } from "../Calculator"
import { Game, gameYears, newGame } from "../game"
import { AcceptedLaw } from "../laws"
import { ParamKey } from "../params"
import { useStore } from "../store"

export function getParamOverYearsWithLaw(laws: AcceptedLaw[], years: number[], param: ParamKey): number[] {
  const g: Game = newGame()

  return years.map((y) => {
    while (y > g.currentYear) {
      g.currentYear++
      g.values = calculateNextYear(g, laws, g.currentYear)
    }
    return Math.round(g.values[param])
  })
}

export default defineComponent({
  props: {
    lawsToSimulate: { type: Array as PropType<Array<AcceptedLaw>>, required: true },
    paramId: { type: String as PropType<ParamKey>, required: true },
  },
  setup(props, context) {
    const store = useStore()
    const game = computed(() => store.state.game)

    const chartOptions = computed(
      (): ApexOptions => ({
        chart: {
          id: props.paramId + "-withLawEffects",
          animations: { enabled: false },
        },
        xaxis: {
          categories: gameYears,
          labels: {
            rotate: -90,
          },
        },
      })
    )
    const series = computed((): { name: string; data: number[] }[] => [
      {
        name: "Simulated " + props.paramId,
        data: getParamOverYearsWithLaw(props.lawsToSimulate, gameYears, props.paramId),
      },
    ])

    return {
      chartOptions,
      series,
    }
  },
})
</script>

<template>
  <div>
    <div>{{ paramId }}</div>
    <apexchart type="bar" :options="chartOptions" :series="series" />
  </div>
</template>

<style lang="scss" scoped></style>
