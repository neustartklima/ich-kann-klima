<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/runtime-core"
import { ApexOptions } from "apexcharts"
import { gameYears } from "../game"
import { BaseParams, ParamKey } from "../params"

export default defineComponent({
  props: {
    simulatedValues: { type: Array as PropType<Array<BaseParams>>, required: true },
    paramId: { type: String as PropType<ParamKey>, required: true },
  },
  setup(props, context) {
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
        data: props.simulatedValues.map((v) => Math.round(v[props.paramId])),
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
