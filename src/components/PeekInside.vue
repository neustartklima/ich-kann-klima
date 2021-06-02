<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "../store"
import { BaseParams, Game, GameId } from "../types"
import { mapGetters } from "vuex"
import { startYear } from "../constants"

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
  unemployment: 700,
  gdp: 800,
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
        this.lawsSortDir = (this.lawsSortDir > 0) ? -1 : 1
      }
      this.lawsSortCol = column
    },
    selectLaw(id: string | undefined) {
      this.lawSelected = id
    }
  },

  computed: {
    effectsOfSelected(): Partial<BaseParams> {
      if (!this.lawSelected || !this.game) return {}
      const game: Game = this.game
      const law = this.store.state.allLaws.find((law) => law.id === this.lawSelected)
      if (!law) return {}
      return law.effects(game.values, startYear, game.currentYear)
    },

    sortedValues(): [string, string, string][] {
      if (this.game === undefined) {
        return []
      }
      const values: BaseParams = this.game.values
      const effects = this.effectsOfSelected
      function format(effect: number | undefined)
      {
        if (effect) return effect.toFixed(2)
        return "-"
      }
      return Object.entries(sortOrder)
        .sort((a, b) => a[1] - b[1])
        .map(entry => entry[0])
        .map(key => [key, values[key as keyof BaseParams].toFixed(2), format(effects[key as keyof BaseParams])])
    },

    sortedLaws(): {id: string, priority: string, state: string}[] {
      if (this.game === undefined) {
        return []
      }
      const game: Game = this.game
      const sortCol: LawSortCols = this.lawsSortCol
      const proposed = this.game.proposedLaws
      const accepted = this.game.acceptedLaws.map(lawRef => lawRef.lawId)
      const rejected = this.game.rejectedLaws
      function findState(lawId: string)
      {
        if(accepted.includes(lawId)) return "a";
        if(proposed.includes(lawId)) return "p";
        if(rejected.includes(lawId)) return "r";
        return "x"
      }
      return this.store.state.allLaws
        .map(law => ({
          id: law.id,
          priority: law.priority(game),
          state: findState(law.id),
        }))
        .sort((a, b) => genCompare(a[sortCol], b[sortCol]) * this.lawsSortDir)
        .map(law => ({...law, priority: law.priority.toFixed(2)}))
    },
  },

})
</script>

<template>
  <details class="peekData">
    <summary>Peek</summary>
    <table>
      <tr v-for="[key, value, effect] in sortedValues" :key="key">
        <td>{{key}}</td>
        <td class="numbercol">{{value}}</td>
        <td>{{effect}}</td>
      </tr>
    </table>
    <table>
      <tr>
        <th @click="sortLaws('state')">S</th>
        <th @click="sortLaws('id')">ID</th>
        <th @click="sortLaws('priority')" class="numbercol">Priority</th>
      </tr>
      <tr v-for="law in sortedLaws" :key="law.id" :class="law.state" @mouseenter="selectLaw(law.id)" @mouseleave="selectLaw(undefined)">
        <td>{{law.state}}</td>
        <td>{{law.id}}</td>
        <td class="numbercol">{{law.priority}}</td>
      </tr>
    </table>
  </details>
</template>

<style lang="scss" scoped>
.peekData {
  padding: 0 5px;
  font-size: 12px;
  background: white;

  .a {
    background: lightblue
  }

  .p {
    background: lightyellow
  }

  .r {
    background: lightgrey
  }

  .numbercol {
    text-align: right;
  }

  &[open] {
    border: 1px solid #cccccc;
  }
}

</style>
