<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "../store"
import { Game, gameYears } from "../game"
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
import { allLaws, Law, LawId, lawIds, LawReference } from "../laws"
import Citation from "./Citation.vue"
import PeekChart from "./PeekChart.vue"
import { Citations } from "../citations"
import { ComputedParam, ParamDefinition, WritableParam } from "../params/ParamsTypes"
import { paramDefinitions } from "../params/Params"
import { Event, allEvents } from "../events"

export default defineComponent({
  components: {
    Citation,
    PeekChart,
  },

  setup() {
    const store = useStore()

    return {
      store,
      game: computed(() => store.state.game),
      gameYears,
    }
  },

  data() {
    return {
      lawsSortCol: "state" as LawCol,
      lawsSortDir: 1,
      eventsSortCol: "probability" as EventCol,
      eventsSortDir: -1,
      lawSelected: undefined as string | undefined,
      eventSelected: undefined as string | undefined,
      paramSelected: undefined as ParamKey | undefined,
      showDetails: true as boolean,
      showCharts: false as boolean,
      showParams: true as boolean,
      showLaws: true as boolean,
      showEvents: false as boolean,
      showYears: false as boolean,
      simulatedLaws: [] as LawReference[],
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
    toggleLawList() {
      this.showLaws = !this.showLaws
      if (this.showLaws) this.showEvents = false
    },
    toggleEventList() {
      this.showEvents = !this.showEvents
      if (this.showEvents) this.showLaws = false
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
    dragStart(event: DragEvent, data: { lawId?: LawId; year?: number }) {
      const { lawId, year } = data
      if (!event.dataTransfer) return
      event.dataTransfer.dropEffect = "link"
      if (lawId) event.dataTransfer.setData("lawId", lawId)
      if (year) event.dataTransfer.setData("year", year.toString())
    },
    onDrop(event: DragEvent, data: { lawId?: LawId; year?: number }) {
      const { lawId, year } = data
      if (!event.dataTransfer) return
      if (year) {
        const dropped = event.dataTransfer.getData("lawId")
        const lawId: LawId | undefined = lawIds.find((id) => id === dropped)
        if (lawId) {
          this.simulateLaw(lawId, year)
        }
      } else if (lawId) {
        const dropped = event.dataTransfer.getData("year")
        const year: number | undefined = this.gameYears.find((y) => y == Number(dropped))
        if (year) {
          this.simulateLaw(lawId, year)
        }
      }
    },
    simulateLaw(lawId: LawId, year: number) {
      this.simulatedLaws = this.simulatedLaws.filter((l) => l.lawId != lawId).concat({ lawId, effectiveSince: year })
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
      return allLaws.find((law) => law.id === this.lawSelected)
    },

    selectedEvent(): Event | undefined {
      return allEvents.find((event) => event.id === this.eventSelected)
    },

    selectedParam(): ParamDefinition | undefined {
      return this.paramSelected ? paramDefinitions[this.paramSelected] : undefined
    },

    wParam(): WritableParam | undefined {
      const p = this.selectedParam
      return p instanceof WritableParam ? p : undefined
    },

    cParam(): ComputedParam | undefined {
      const p = this.selectedParam
      return p instanceof ComputedParam ? p : undefined
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
      return law.effects(this.game, this.startYearOfSelected, this.game.currentYear)
    },

    sortedValues(): ValueRow[] {
      if (!this.game) return []
      return getSortedValues(this.game, this.effectsOfSelected)
    },

    sortedLaws(): LawRow[] {
      if (!this.game) return []
      return getSortedLaws(this.game, this.lawsSortCol, this.lawsSortDir, allLaws)
    },

    sortedEvents(): EventRow[] {
      if (!this.game) return []
      return getSortedEvents(this.game, this.eventsSortCol, this.eventsSortDir, allEvents)
    },

    lawsInYear(): (year: number) => { lawId: LawId; cls: string }[] {
      const simLaws = this.simulatedLaws.map((l) => ({ ...l, cls: "simulated" }))
      const accLaws = (this.game?.acceptedLaws || [])
        .filter((al) => !simLaws.some((sl) => sl.lawId === al.lawId))
        .map((l) => ({ ...l, cls: "accepted" }))
      const combinedLaws = accLaws.concat(simLaws)
      return (year: number) => {
        return combinedLaws.filter((l) => l.effectiveSince === year)
      }
    },
  },
})
</script>

<template>
  <details class="peekData">
    <summary @click="unselect()" class="clickable">Peek</summary>
    <div class="Menu">
      <a @click="showCharts = !showCharts" class="clickable" :class="showCharts ? 'selected' : ''">Charts</a>&nbsp;
      <a @click="showDetails = !showDetails" class="clickable" :class="showDetails ? 'selected' : ''">Details</a>&nbsp;
      <a @click="showParams = !showParams" class="clickable" :class="showParams ? 'selected' : ''">Params</a>&nbsp;
      <a @click="toggleLawList()" class="clickable" :class="showLaws ? 'selected' : ''">Laws</a>&nbsp;
      <a @click="toggleEventList()" class="clickable" :class="showEvents ? 'selected' : ''">Events</a>&nbsp;
      <a @click="showYears = !showYears" class="clickable" :class="showYears ? 'selected' : ''">Years</a>&nbsp;
    </div>
    <div v-if="selectedLaw && showCharts" class="Details sidebyside">
      <PeekChart :game="game" :selectedLaw="selectedLaw" paramId="co2emissions" />
      <PeekChart :game="game" :selectedLaw="selectedLaw" paramId="popularity" />
      <PeekChart :game="game" :selectedLaw="selectedLaw" paramId="stateDebt" />
      <PeekChart :game="game" :selectedLaw="selectedLaw" paramId="co2budget" />
    </div>
    <div v-if="selectedLaw && showDetails" class="Details sidebyside">
      <div class="Title">{{ selectedLaw.title }}</div>
      <div class="Description">{{ selectedLaw.description }}</div>
      <div class="SectionHead">Details:</div>
      <div class="Section" v-html="selectedLaw.details" />
      <div class="SectionHead">Internes:</div>
      <div class="Section" v-html="selectedLaw.internals" />
      <div class="SectionHead">Referenzen:</div>
      <Citation class="Section" v-for="(citation, pos) in citationsOfLaw" :key="pos" :citation="citation" />
    </div>
    <div v-if="selectedEvent && showDetails" class="Details sidebyside">
      <div class="Title">{{ selectedEvent.title }}</div>
      <div class="Description">{{ selectedEvent.description }}</div>
      <div class="SectionHead">Details:</div>
      <div class="Section" v-html="selectedEvent.details" />
      <div class="SectionHead">Internes:</div>
      <div class="Section" v-html="selectedEvent.internals" />
      <div class="SectionHead">Referenzen:</div>
      <Citation class="Section" v-for="(citation, pos) in selectedEvent?.citations" :key="pos" :citation="citation" />
    </div>
    <div v-if="selectedParam && showDetails" class="Details sidebyside">
      <div class="Title">{{ paramSelected }} [{{ selectedParam.unit }}]</div>
      <div v-if="wParam">Initial value: {{ wParam.initialValue }} {{ wParam.unit }}</div>
      <div v-if="cParam && cParam.shouldInitiallyBe">
        Should initially be: {{ cParam.shouldInitiallyBe }} {{ cParam.unit }}
      </div>
      <div v-if="cParam">
        Calculation:
        {{ cParam.valueGetter }}
      </div>
      <div class="SectionHead">Details:</div>
      <div class="Section" v-html="selectedParam.details" />
      <div class="SectionHead">Internes:</div>
      <div class="Section" v-html="selectedParam.internals" />
      <div class="SectionHead">Referenzen:</div>
      <Citation class="Section" v-for="(citation, pos) in selectedParam.citations" :key="pos" :citation="citation" />
    </div>
    <div v-if="showParams" class="paramsList sidebyside">
      <table>
        <tr v-for="row in sortedValues" :key="row.id" class="clickable" :class="row.class" @click="selectParam(row.id)">
          <td>{{ row.id }}</td>
          <td class="numbercol">{{ row.value }}</td>
          <td class="effcol">{{ row.effect }}</td>
          <td>{{ row.unit }}</td>
        </tr>
      </table>
    </div>
    <div v-if="showLaws" class="lawList sidebyside">
      <table>
        <tr>
          <th @click="sortLaws('state')" class="clickable">S</th>
          <th @click="sortLaws('id')" class="clickable">ID</th>
          <th @click="sortLaws('priority')" class="clickable priocol">Priority</th>
        </tr>
        <tr
          v-for="law in sortedLaws"
          :key="law.id"
          class="clickable"
          :class="law.state"
          @click="selectLaw(law.id)"
          draggable="true"
          @dragstart="dragStart($event, { lawId: law.id })"
          @drop.prevent="onDrop($event, { lawId: law.id })"
          @dragover.prevent
          @dragenter.prevent
        >
          <td>{{ law.state }}</td>
          <td>{{ law.id }}</td>
          <td class="priocol">{{ law.priority }}</td>
        </tr>
      </table>
    </div>
    <div v-if="showEvents" class="eventList sidebyside">
      <table>
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
    <div v-if="showYears" class="yearList sidebyside">
      <table>
        <template v-for="year in gameYears" :key="year">
          <tr
            draggable="true"
            @dragstart="dragStart($event, { year })"
            @drop.prevent="onDrop($event, { year })"
            @dragover.prevent
            @dragenter.prevent
          >
            <th>{{ year }}</th>
          </tr>
          <tr
            v-for="{ lawId, cls } in lawsInYear(year)"
            :key="lawId"
            :class="cls"
            draggable="true"
            @dragstart="dragStart($event, { lawId })"
            @drop.prevent="onDrop($event, { lawId })"
            @dragover.prevent
            @dragenter.prevent
          >
            <td>{{ lawId }}</td>
          </tr>
        </template>
      </table>
    </div>
  </details>
</template>

<style lang="scss" scoped>
$hover: #c0c0c0;
$selected: #e0e0e0;
$shadedBackground: #f0e7d0;
$sectionBackground: #f0e7d0;
$lightBackground: #fff5dd;

.peekData {
  padding: 0 5px;
  font-size: 12px;
  background-color: $lightBackground;

  summary,
  .Menu {
    text-align: right;
  }

  .sidebyside {
    float: left;
  }

  .paramsList,
  .lawList,
  .eventList,
  .yearList,
  .Details {
    max-height: 95vh;
    overflow-y: scroll;
  }

  .paramsList {
    background-color: $shadedBackground;
  }

  .yearList {
    th {
      font-weight: bold;
      text-align: left;
    }
    td {
      text-indent: 10pt;
    }
    .accepted {
      color: blue;
    }
    .simulated {
      color: brown;
    }
  }

  .Details {
    width: 35em;
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

    .Section {
      background: $sectionBackground;

      :deep(h1) {
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
    background: lightgreen;
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

  .selected {
    background-color: $selected;
  }
}
</style>
