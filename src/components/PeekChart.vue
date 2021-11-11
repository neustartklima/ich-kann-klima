<script lang="ts">
import { computed, defineComponent, PropType, watch, ref, onMounted, watchEffect } from "@vue/runtime-core"
import { ApexOptions } from "apexcharts"
import VueApexCharts, { VueApexChartsComponent } from "vue3-apexcharts"
import { GameYear, gameYears } from "../game"
import { BaseParams, ParamKey } from "../params"

export default defineComponent({
  components: { apexchart: VueApexCharts },
  props: {
    chartData: { type: Object as PropType<{ values: BaseParams[]; changes: BaseParams[] }>, required: true },
    paramId: { type: String as PropType<ParamKey>, required: true },
    selectedYear: { type: Number as PropType<GameYear> },
  },
  emits: ["update:selectedYear"],
  setup(props, context) {
    const chartOptions = computed(
      (): ApexOptions => ({
        chart: {
          id: props.paramId + "-withLawEffects",
          animations: { enabled: false },
          stacked: true,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: gameYears,
          labels: {
            rotate: -90,
          },
        },
      })
    )

    const pairs = computed((): { value: number; change: number }[] =>
      props.chartData.values.map((v, i) => ({
        value: v[props.paramId],
        change: props.chartData.changes[i][props.paramId],
      }))
    )

    const series = computed((): { name: string; data: number[] }[] => [
      {
        name: "Simulated " + props.paramId,
        data: pairs.value.map((p) => Math.round(p.change * p.value > 0 ? p.value - p.change : p.value)),
      },
      {
        name: "Gains of " + props.paramId + " by selected law",
        data: pairs.value.map((p) => Math.round(p.change * p.value > 0 ? p.change : 0)),
      },
      {
        name: "Losses of " + props.paramId + " by selected law",
        data: pairs.value.map((p) => Math.round(p.change * p.value < 0 ? -p.change : 0)),
      },
    ])

    const chart = ref<VueApexChartsComponent>()

    var selectedDataPoint: number | undefined = undefined
    function unselect() {
      if (chart.value?.chart != null && selectedDataPoint != undefined) {
        chart.value?.toggleDataPointSelection(0, selectedDataPoint)
      }
      selectedDataPoint = undefined
    }
    function selectYear(year: number | undefined): void {
      if (chart.value?.chart != null && year) {
        const i = year - gameYears[0]
        if (selectedDataPoint != i) {
          unselect()
          selectedDataPoint = i
          chart.value?.toggleDataPointSelection(0, i)
        }
      } else {
        unselect()
      }
    }

    watchEffect(() => selectYear(props.selectedYear), { flush: "post" })

    function click(
      event: any,
      chartContext: any,
      config: { seriesIndex: number; dataPointIndex: number; config: ApexOptions }
    ) {
      const i = config.dataPointIndex
      if (i < 0) return
      if (i === selectedDataPoint) {
        selectedDataPoint = undefined
        context.emit("update:selectedYear", undefined)
      } else {
        selectedDataPoint = i
        context.emit("update:selectedYear", i + gameYears[0])
      }
    }

    return {
      chartOptions,
      series,
      chart,
      click,
    }
  },
})
</script>

<template>
  <div>
    <div>{{ paramId }}</div>
    <component is="apexchart" ref="chart" type="bar" :options="chartOptions" :series="series" @click="click" />
  </div>
</template>

<style lang="scss" scoped></style>
