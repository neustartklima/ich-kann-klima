<script setup lang="ts">
import { computed, ref, watchEffect } from "@vue/runtime-core"
import { ApexOptions } from "apexcharts"
import VueApexCharts, { VueApexChartsComponent } from "vue3-apexcharts"
import { GameYear, gameYears } from "../game"
import { BaseParams, ParamKey } from "../params"

const props = defineProps<{
  chartData: { values: BaseParams[]; changes: BaseParams[] }
  paramId: ParamKey
  selectedYear?: GameYear
}>()

const emit = defineEmits<{
  (e: "update:selectedYear", year?: number): void
}>()

const barColor = "#9c6d00"
const lossColor = "#ce900070"
const gainColor = "#644600"
const chartOptions = computed(
  (): ApexOptions => ({
    xaxis: {
      categories: gameYears,
      labels: {
        rotate: -90,
      },
    },
    chart: {
      id: props.paramId + "-withLawEffects",
      animations: { enabled: false },
      stacked: true,
    },
    colors: [barColor, gainColor, lossColor],
    legend: {
      show: false,
    },
    markers: {
      size: 0,
    },
    dataLabels: {
      enabled: false,
    },
  })
)

const pairs = computed((): { value: number; change: number }[] =>
  props.chartData.values.map((v, i) => ({
    value: v[props.paramId],
    change: props.chartData.changes[i][props.paramId],
  }))
)

const chartData = computed((): { value: number; gain: number; loss: number }[] =>
  pairs.value.map((p) => {
    const prevVal = p.value - p.change
    if (p.change * p.value > 0) {
      if (prevVal * p.value > 0) {
        return { value: prevVal, gain: p.change, loss: 0 }
      } else {
        return { value: 0, gain: p.value, loss: prevVal }
      }
    } else {
      return { value: p.value, gain: 0, loss: -p.change }
    }
  })
)

const series = computed((): { name: string; data: number[] }[] => [
  {
    name: "Simulated " + props.paramId,
    data: chartData.value.map((p) => Math.round(p.value)),
  },
  {
    name: "Gains of " + props.paramId + " by selected law",
    data: chartData.value.map((p) => Math.round(p.gain)),
  },
  {
    name: "Losses of " + props.paramId + " by selected law",
    data: chartData.value.map((p) => Math.round(p.loss)),
  },
])

const chart = ref<VueApexChartsComponent>()

let selectedDataPoint: number | undefined = undefined

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
    emit("update:selectedYear", undefined)
  } else {
    selectedDataPoint = i
    emit("update:selectedYear", i + gameYears[0])
  }
}
</script>

<template>
  <div>
    <div>{{ paramId }}</div>
    <VueApexCharts ref="chart" type="bar" :options="chartOptions" :series="series" @click="click" />
  </div>
</template>

<style lang="scss" scoped></style>
