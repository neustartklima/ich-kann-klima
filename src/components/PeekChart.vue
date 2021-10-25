<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/runtime-core"
import { ApexOptions } from "apexcharts"
import { calculateNextYear } from "../Calculator"
import { endYear, startYear } from "../constants"
import { Game } from "../game"
import { getAcceptedLaw, Law } from "../laws"
import { ParamKey } from "../params"
import { useStore } from "../store"

export function getParamOverYearsWithLaw(
  game: Game | undefined,
  law: Law | undefined,
  years: number[],
  param: ParamKey
): number[] {
  if (game === undefined || law === undefined) return []

  const g: Game = { ...game }

  const initialLaws = g.acceptedLaws.map(getAcceptedLaw)
  const laws = g.acceptedLaws.some((l) => l.lawId === law.id)
    ? initialLaws
    : [...initialLaws, { ...law, effectiveSince: g.currentYear + 1 }]

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
    selectedLaw: { type: Object as PropType<Law | undefined>, required: true },
    paramId: { type: String as PropType<ParamKey>, required: true },
  },
  setup(props, context) {
    const store = useStore()
    const game = computed(() => store.state.game)
    const chartYears = [...Array(endYear - startYear + 1).keys()].map((n) => n + startYear)
    const chartOptions = computed(
      (): ApexOptions => ({
        chart: {
          id: props.paramId + "-withLawEffects",
        },
        xaxis: {
          categories: chartYears,
          labels: {
            rotate: -90,
          },
        },
      })
    )
    const series = computed((): { name: string; data: number[] }[] => [
      {
        name: props.selectedLaw?.id || "",
        data: getParamOverYearsWithLaw(game.value, props.selectedLaw, chartYears, props.paramId),
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
