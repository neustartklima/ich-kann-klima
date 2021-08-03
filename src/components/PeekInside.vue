<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "../store"
import { Game } from "../game"
import { Change, ParamKey } from "../params"
import { startYear } from "../constants"
import {
  LawCol,
  getSortedLaws,
  getSortedValues,
  LawRow,
  ValueRow,
  getSortedEvents,
  EventRow,
  EventCol,
} from "./PeekTools"
import { Law } from "../laws"
import Citation from "./Citation.vue"
import { Citations } from "../citations"
import { ParamDefinition } from "../params/ParamsTypes"
import { paramDefinitions } from "../params/Params"
import EventMachine from "../EventMachine"
import { Event, allEvents } from "../events"

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
      allEvents: allEvents,
      eventMachine: EventMachine(store, allEvents),
    }
  },

  data() {
    return {
      selectedTable: "laws" as "laws" | "events",
      lawsSortCol: "state" as LawCol,
      lawsSortDir: 1,
      eventsSortCol: "probability" as EventCol,
      eventsSortDir: -1,
      lawSelected: undefined as string | undefined,
      eventSelected: undefined as string | undefined,
      paramSelected: undefined as ParamKey | undefined,
    }
  },
  methods: {
    sortLaws(column: LawCol) {
      if (column === this.lawsSortCol) {
        this.lawsSortDir = this.lawsSortDir > 0 ? -1 : 1
      } else {
        this.lawsSortDir = 1
      }
      this.lawsSortCol = column
    },
    sortEvents(column: EventCol) {
      if (column === this.eventsSortCol) {
        this.eventsSortDir = this.eventsSortDir > 0 ? -1 : 1
      } else {
        this.eventsSortDir = 1
      }
      this.eventsSortCol = column
    },
    selectLaw(id: string | undefined) {
      this.unselect()
      this.lawSelected = id
    },
    selectEvent(id: string | undefined) {
      this.unselect()
      this.eventSelected = id
    },
    selectParam(id: ParamKey | undefined) {
      this.unselect()
      this.paramSelected = id
    },
    unselect() {
      this.lawSelected = undefined
      this.eventSelected = undefined
      this.paramSelected = undefined
    },
  },

  computed: {
    startYearOfSelected(): number {
      if (!this.lawSelected || !this.game) return startYear
      const acceptedLaws = this.game.acceptedLaws
      const acceptedLaw = acceptedLaws.find((al) => al.lawId === this.lawSelected)
      if (acceptedLaw) return acceptedLaw.effectiveSince
      return startYear
    },

    selectedLaw(): Law | undefined {
      return this.allLaws.find((law) => law.id === this.lawSelected)
    },

    selectedEvent(): Event | undefined {
      return this.allEvents.find((event) => event.id === this.eventSelected)
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

    sortedEvents(): EventRow[] {
      if (!this.game) return []
      return getSortedEvents(this.store, this.eventsSortCol, this.eventsSortDir, this.allEvents)
    },
  },
})
</script>

<template>
  <details class="peekData">
    <summary @click="unselect()" class="clickable">Peek</summary>
    <div v-if="selectedLaw" class="Details">
      <div class="Title">{{ selectedLaw.title }}</div>
      <div class="Description">{{ selectedLaw.description }}</div>
      <div class="SectionHead">Details:</div>
      <div class="Section" v-html="selectedLaw.details" />
      <div class="SectionHead">Internes:</div>
      <div class="Section" v-html="selectedLaw.internals" />
      <div class="SectionHead">Referenzen:</div>
      <Citation class="Section" v-for="(citation, pos) in citationsOfLaw" :key="pos" :citation="citation" />
    </div>
    <div v-if="selectedEvent" class="Details">
      <div class="Title">{{ selectedEvent.title }}</div>
      <div class="Description">{{ selectedEvent.description }}</div>
      <div class="SectionHead">Details:</div>
      <div class="Section" v-html="selectedEvent.details" />
      <div class="SectionHead">Internes:</div>
      <div class="Section" v-html="selectedEvent.internals" />
      <div class="SectionHead">Referenzen:</div>
      <Citation class="Section" v-for="(citation, pos) in selectedEvent?.citations" :key="pos" :citation="citation" />
    </div>
    <div v-if="selectedParam" class="Details">
      <div class="Title">{{ paramSelected }} [{{ selectedParam.unit }}]</div>
      <div class="SectionHead">Details:</div>
      <div class="Section" v-html="selectedParam.details" />
      <div class="SectionHead">Internes:</div>
      <div class="Section" v-html="selectedParam.internals" />
      <div class="SectionHead">Referenzen:</div>
      <Citation class="Section" v-for="(citation, pos) in selectedParam.citations" :key="pos" :citation="citation" />
    </div>
    <table class="paramsList">
      <tr v-for="row in sortedValues" :key="row.id" class="clickable" :class="row.class" @click="selectParam(row.id)">
        <td>{{ row.id }}</td>
        <td class="numbercol">{{ row.value }}</td>
        <td class="effcol">{{ row.effect }}</td>
        <td>{{ row.unit }}</td>
      </tr>
    </table>
    <div>
      <table class="buttonlist">
        <tr>
          <td class="clickable lawButton" :class="selectedTable" @click="selectedTable = 'laws'">Laws</td>
          <td class="clickable eventButton" :class="selectedTable" @click="selectedTable = 'events'">Events</td>
        </tr>
      </table>
      <table v-if="selectedTable === 'laws'" class="lawlist">
        <tr>
          <th @click="sortLaws('state')" class="clickable">S</th>
          <th @click="sortLaws('id')" class="clickable">ID</th>
          <th @click="sortLaws('priority')" class="clickable priocol">Priority</th>
        </tr>
        <tr v-for="law in sortedLaws" :key="law.id" class="clickable" :class="law.state" @click="selectLaw(law.id)">
          <td>{{ law.state }}</td>
          <td>{{ law.id }}</td>
          <td class="priocol">{{ law.priority }}</td>
        </tr>
      </table>
      <table v-if="selectedTable === 'events'" class="lawlist">
        <tr>
          <th @click="sortEvents('id')" class="clickable">ID</th>
          <th @click="sortEvents('probability')" class="clickable priocol">Probability</th>
        </tr>
        <tr v-for="event in sortedEvents" :key="event.id" class="clickable" @click="selectEvent(event.id)">
          <td>{{ event.id }}</td>
          <td class="priocol">{{ event.probability }}</td>
        </tr>
      </table>
    </div>
  </details>
</template>

<style lang="scss" scoped>
$hover: #c0c0c0;
$shadedBackground: #f0f0f0;
$sectionBackground: #fffeee;
$lightBackground: #ffffff;

.peekData {
  padding: 0 5px;
  font-size: 12px;
  background: transparent;

  summary {
    background-color: $lightBackground;
  }
  > div,
  > table {
    float: left;
  }

  .buttonlist {
    width: 100%;
    background-color: $shadedBackground;
    border-collapse: collapse;
    td {
      font-weight: bold;
      text-align: center;
      padding: 0.3em;
    }
  }

  .lawButton.events {
    background-color: white;
  }
  .eventButton.laws {
    background-color: white;
  }

  .lawlist,
  .eventList {
    background-color: $shadedBackground;
    width: 30em;
  }

  .paramsList {
    background-color: $lightBackground;
  }

  .Details {
    width: 30em;
    background-color: $shadedBackground;
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
      background: $sectionBackground;
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

  .clickable:hover {
    background-color: $hover;
  }

  &[open] {
    border: 1px solid #cccccc;
  }
}
</style>
