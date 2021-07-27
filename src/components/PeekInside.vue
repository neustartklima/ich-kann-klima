<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "../store"
import { Game } from "../game"
import { Change } from "../params"
import { startYear } from "../constants"
import { LawSortCols, getSortedLaws, getSortedValues, LawRow, ValueRow } from "./PeekTools"

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

    effectsOfSelected(): Change[] {
      if (!this.lawSelected || !this.game) return []
      const game: Game = this.game
      const law = this.allLaws.find((law) => law.id === this.lawSelected)
      if (!law) return []
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
        <th @click="sortLaws('priority')" class="priocol">Priority</th>
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
        <td class="priocol">{{ law.priority }}</td>
      </tr>
    </table>
  </details>
</template>

<style lang="scss" scoped>
.peekData {
  padding: 0 5px;
  font-size: 12px;
  background: white;

  table {
    float: left;
  }

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

  .priocol {
    text-align: right;
    min-width: 4em;
  }

  .numbercol {
    text-align: right;
    min-width: 6em;
  }

  .effcol {
    min-width: 6em;
    max-width: 6em;
  }

  &[open] {
    border: 1px solid #cccccc;
  }
}
</style>
