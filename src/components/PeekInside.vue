<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "../store"
import { BaseParams, Game, WritableBaseParams } from "../types"
import { startYear } from "../constants"
import { getSortedLaws, getSortedValues, LawRow, ValueRow } from "./PeekTools"

const sortOrder: BaseParams = {
  co2budget: 100,
  co2emissionsIndustry: 200,
  co2emissionsMobility: 200,
  co2emissionsBuildings: 200,
  co2emissionsAgriculture: 200,
  co2emissionsOthers: 200,
  co2emissionsEnergy: 200,
  co2emissions: 299,
  electricityDemand: 300,
  electricitySolar: 400,
  electricityWind: 400,
  electricityWater: 400,
  electricityBiomass: 400,
  electricityHardCoal: 450,
  electricityBrownCoal: 450,
  electricityCoal: 459,
  electricityNuclear: 430,
  electricityGas: 460,
  stateDebt: 500,
  popularity: 600,
  numberOfCitizens: 700,
  unemployment: 700,
  gdp: 800,
  publicTransportUsage: 470,
  publicTransportPassengerKm: 470,
  publicTransportRidesPerCitizen: 470,
  publicTransportRevenue: 470,
  publicTransportSubventions: 470,
  publicTransportInvestmentsPerCitizen: 470,
}

function genCompare(a: number | string, b: number | string) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

type LawSortCols = "state" | "id" | "priority"

export default defineComponent({
  setup() {
    const store = useStore()

    return {
      store,
      allLaws: store.state.allLaws,
      game: computed(() => store.state.game),
    }
  },

  data() {
    return {
      lawsSortCol: "state" as LawSortCols,
      lawsSortDir: 1,
      lawSelected: undefined as string | undefined,
    }
  },
  methods: {
    sortLaws(column: LawSortCols) {
      if (column === this.lawsSortCol) {
        this.lawsSortDir = this.lawsSortDir > 0 ? -1 : 1
      }
      this.lawsSortCol = column
    },
    selectLaw(id: string | undefined) {
      this.lawSelected = id
    },
  },

  computed: {
    startYearOfSelected(): number {
      if (!this.lawSelected || !this.game) return startYear
      const acceptedLaws = this.game.acceptedLaws
      const acceptedLaw = acceptedLaws.find(al => al.lawId === this.lawSelected)
      if (acceptedLaw) return acceptedLaw.effectiveSince
      return startYear
    },

    effectsOfSelected(): Partial<WritableBaseParams> {
      if (!this.lawSelected || !this.game) return {}
      const game: Game = this.game
      const law = this.allLaws.find((law) => law.id === this.lawSelected)
      if (!law) return {}
      return law.effects(this.game.values, this.startYearOfSelected, this.game.currentYear)
    },

    sortedValues(): ValueRow[] {
      if (!this.game) return []
      return getSortedValues(this.game.values, this.effectsOfSelected)
    },

    sortedLaws(): LawRow[] {
      if (!this.game) return []
      return getSortedLaws(this.game, this.lawsSortCol, this.lawsSortDir, this.allLaws)
    },
  },
})
</script>

<template>
  <details class="peekData">
    <summary>Peek</summary>
    <table>
      <tr v-for="row in sortedValues" :key="row.id" :class="row.class">
        <td>{{ row.id }}</td>
        <td>{{ row.unit }}</td>
        <td class="numbercol">{{ row.value }}</td>
        <td class="effcol">{{ row.effect }}</td>
      </tr>
    </table>
    <table>
      <tr>
        <th @click="sortLaws('state')">S</th>
        <th @click="sortLaws('id')">ID</th>
        <th @click="sortLaws('priority')" class="numbercol">Priority</th>
      </tr>
      <tr
        v-for="law in sortedLaws"
        :key="law.id"
        :class="law.state"
        @mouseenter="selectLaw(law.id)"
        @mouseleave="selectLaw(undefined)"
      >
        <td>{{ law.state }}</td>
        <td>{{ law.id }}</td>
        <td class="numbercol">{{ law.priority }}</td>
      </tr>
    </table>
  </details>
</template>

<style lang="scss" scoped>
.peekData {
  padding: 0 5px;
  font-size: 12px;
  background: white;

  .calculated {
    font-weight: bold;
  }

  .a {
    background: lightblue;
  }

  .p {
    background: lightyellow;
  }

  .r {
    background: lightgrey;
  }

  .numbercol {
    text-align: right;
    min-width: 4em;
  }

  .effcol {
    min-width: 4em;
  }

  &[open] {
    border: 1px solid #cccccc;
  }
}
</style>
