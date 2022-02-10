<script setup lang="ts">
import { computed } from "vue"
import { co2BudgetRating, financeRating, popularityRating } from "../Calculator"
import LawProposals from "../components/LawProposals.vue"
import { date } from "../lib/Temporal"
import { useStore } from "../store"
import ArchiveDoor from "./ArchiveDoor.vue"
import Calendar from "./Calendar.vue"
import ClimateIndicator from "./ClimateIndicator.vue"
import FinanceIndicator from "./FinanceIndicator.vue"
import Heater from "./Heater.vue"
import PopularityIndicator from "./PopularityIndicator.vue"
import Table from "./Table.vue"
import Tour from "./Tour.vue"
import TVSet from "./TVSet.vue"

const store = useStore()

const devMode = computed(() => store.state.devMode)
const currentYear = computed(() => store.state.game?.currentYear || 2021)
const currentMonth = computed(() => date(store.state.game?.currentDate as string).lux.month)
const finance = computed(() => {
  const game = store.state.game
  return game ? financeRating(game) : 0
})
const popularity = computed(() => {
  const game = store.state.game
  return game ? popularityRating(game) : 0
})
const climate = computed(() => {
  const game = store.state.game
  return game ? co2BudgetRating(game) : 0
})
</script>

<template>
  <div id="office">
    <ArchiveDoor v-if="devMode" />

    <Calendar :year="currentYear" :month="currentMonth" />
    <Heater />
    <PopularityIndicator :value="popularity" />
    <TVSet />
    <ClimateIndicator :value="climate" />
    <Table />
    <FinanceIndicator :value="finance" />
    <LawProposals />
    <Tour />
  </div>
</template>

<style lang="scss"></style>
