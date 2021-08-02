<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "../store"
import { Game } from "../game"
import { BaseParams, Change, ParamKey } from "../params"
import { startYear } from "../constants"
import { LawSortCols, getSortedLaws, getSortedValues, LawRow, ValueRow } from "./PeekTools"
import { Law } from "../laws"
import Citation from "./Citation.vue"
import { Citations } from "../citations"
import { ParamDefinition } from "../params/ParamsTypes"
import { paramDefinitions } from "../params/Params"

export default defineComponent({
  components: {
    Citation,
  },

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
      paramSelected: undefined as ParamKey | undefined,
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
    selectParam(id: ParamKey | undefined) {
      this.paramSelected = id
    },
    unselect() {
      this.lawSelected = undefined
      this.paramSelected = undefined
    }
  },

  computed: {
    startYearOfSelected(): number {
      if (!this.lawSelected || !this.game) return startYear
      const acceptedLaws = this.game.acceptedLaws
      const acceptedLaw = acceptedLaws.find(al => al.lawId === this.lawSelected)
      if (acceptedLaw) return acceptedLaw.effectiveSince
      return startYear
    },

    selectedLaw(): Law | undefined {
      return this.allLaws.find((law) => law.id === this.lawSelected)
    },

    selectedParam(): ParamDefinition | undefined {
      return this.paramSelected ? paramDefinitions[this.paramSelected] : undefined
    },

    citationsOfLaw(): Citations {
      if (this.selectedLaw && this.selectedLaw.citations) {
        return this.selectedLaw.citations
      } else {
        return []
      }
    },

    effectsOfSelected(): Change[] {
      if (!this.lawSelected || !this.game) return []
      const game: Game = this.game
      const law = this.selectedLaw
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
    <summary @click="unselect()">Peek</summary>
    <div v-if="selectedLaw" class="Details">
      <div class="Title">{{ selectedLaw.title }}</div>
      <div class="Description">{{ selectedLaw.description }}</div>
      <div class="SectionHead">Details:</div>
      <div class="Section" v-html="selectedLaw.details" />
      <div class="SectionHead">Internes:</div>
      <div class="Section" v-html="selectedLaw.internals" />
      <div class="SectionHead">Referenzen:</div>
      <Citation v-for="(citation, pos) in citationsOfLaw" :key="pos" :citation="citation" />
    </div>
    <div v-if="selectedParam" class="Details">
      <div class="Title">{{ paramSelected }} [{{ selectedParam.unit }}]</div>
      <div class="SectionHead">Details:</div>
      <div class="Section" v-html="selectedParam.details" />
      <div class="SectionHead">Internes:</div>
      <div class="Section" v-html="selectedParam.internals" />
      <div class="SectionHead">Referenzen:</div>
      <Citation
        class="Section"
        v-for="(citation, pos) in selectedParam.citations"
        :key="pos"
        :citation="citation"
      />
    </div>
    <table>
      <tr v-for="row in sortedValues" :key="row.id" :class="row.class" @click="selectParam(row.id)">
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
      <tr v-for="law in sortedLaws" :key="law.id" :class="law.state" @click="selectLaw(law.id)">
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

  > div,
  table {
    float: left;
  }

  .Details {
    width: 30em;
    > * {
      margin: 0.67em 0 0.67em 0;
    }

    .Title {
      font-weight: bold;
      font-size: 1.4em;
    }

    .SectionHead {
      font-weight: bold;
      font-size: 1.2em;
    }

    .Section::v-deep {
      background-color: cornsilk;
      h1 {
        font-size: 1.4em;
      }
    }
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
