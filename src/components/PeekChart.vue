<script lang="ts">
import { computed, defineComponent, PropType, watch, ref, onMounted, watchEffect } from "@vue/runtime-core"
import { ApexOptions } from "apexcharts"
import VueApexCharts, { VueApexChartsComponent } from "vue3-apexcharts"
import { GameYear, gameYears } from "../game"
import { BaseParams, ParamKey } from "../params"

export default defineComponent({
  components: { apexchart: VueApexCharts },
  props: {
    simulatedValues: { type: Array as PropType<Array<BaseParams>>, required: true },
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
