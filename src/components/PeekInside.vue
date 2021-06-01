<script lang="ts">
import { computed, defineComponent } from "vue"
import { store, useStore } from "../store"
import { BaseParams, GameId } from "../types"
import { mapGetters } from "vuex"

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

export default defineComponent({
  setup() {
    const store = useStore()

    return {
      store,
      values: computed(() => store.state.game?.values),
      allLaws: computed(() => store.state.allLaws),
      acceptedLaws: computed(() => store.state.game?.acceptedLaws),
    }
  },

  computed: {
    sortedValues(): [string, number][] {
      if (this.values === undefined)
      {
        return []
      }
      const vals: BaseParams = this.values
      return Object.entries(sortOrder)
        .sort((a, b) => a[1] - b[1])
        .map(entry => entry[0])
        .map(key => [key, vals[key as keyof BaseParams]])
    },
  },

})
</script>

<template>
  <details class="peekData">
    <summary>Peek</summary>
    <table>
      <tr v-for="[key, value] in sortedValues">
        <td>{{key}}</td>
        <td>{{value}}</td>
      </tr>
    </table>
  </details>
</template>

<style lang="scss" scoped>
.peekData {
  padding: 0 5px;
  font-size: 12px;
  background: white;

  &[open] {
    border: 1px solid #cccccc;
  }
}

</style>
