<script lang="ts">
import { computed, defineComponent } from "vue"
import { useStore } from "../store"
import { GameYear, gameYears } from "../game"
import { applyEffects, BaseParams, Change, createBaseValues, ParamKey, paramKeys, zeroParams } from "../params"
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
import { allLaws, Law, LawId, lawIds, LawReference, ParamsOfLaws } from "../laws"
import Citation from "./Citation.vue"
import PeekChart from "./PeekChart.vue"
import { Citations } from "../citations"
import { ComputedParam, ParamDefinition, WritableParam } from "../params/ParamsTypes"
import { paramDefinitions } from "../params/Params"
import { Event, allEvents, EventId } from "../events"
import { directive as clickaway } from "vue3-click-away"
import { vueSimulationObjects } from "./PeekSimulator"
import Menu from "./Menu.vue"

export default defineComponent({
  directives: {
    clickaway,
  },

  components: {
    Citation,
    PeekChart,
    Menu,
  },

  setup() {
    const store = useStore()
    const game = computed(() => store.state.game)

    const simulationObjects = vueSimulationObjects(game)

    return {
      store,
      game,
      gameYears,
      ...simulationObjects,
    }
  },

  data() {
    return {
      lawsSortCol: "state" as LawCol,
      lawsSortDir: 1,
      eventsSortCol: "probability" as EventCol,
      eventsSortDir: -1,
      lastSelected: undefined as "law" | "event" | "param" | "year" | undefined,
      lawSelected: undefined as LawId | undefined,
      eventSelected: undefined as EventId | undefined,
      paramSelected: undefined as ParamKey | undefined,
      yearSelected: undefined as GameYear | undefined,
      showDetails: true as boolean,
      showCharts: false as boolean,
      showParams: true as boolean,
      showLaws: true as boolean,
      showEvents: false as boolean,
      showYears: false as boolean,
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
    selectLaw(id: LawId) {
      if (id === this.lawSelected) {
        this.lawSelected = undefined
      } else {
        this.lastSelected = "law"
        this.lawSelected = id
      }
    },
    selectEvent(id: EventId) {
      if (id === this.eventSelected) {
        this.eventSelected = undefined
      } else {
        this.lastSelected = "event"
        this.eventSelected = id
      }
    },
    selectParam(id: ParamKey) {
      if (id === this.paramSelected) {
        this.paramSelected = undefined
      } else {
        this.lastSelected = "param"
        this.paramSelected = id
      }
    },
    selectYear(year: GameYear) {
      if (year === this.yearSelected) {
        this.yearSelected = undefined
      } else {
        this.lastSelected = "year"
        this.yearSelected = year
      }
    },
    unselect() {
      this.lawSelected = undefined
      this.eventSelected = undefined
      this.paramSelected = undefined
      this.yearSelected = undefined
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
          this.addToSimulation(lawId, year)
        }
      } else if (lawId) {
        const dropped = event.dataTransfer.getData("year")
        const year: GameYear | undefined = this.gameYears.find((y) => y == Number(dropped))
        if (year) {
          this.addToSimulation(lawId, year)
        }
      }
    },
  },

  computed: {
    startYearOfSelected(): number | undefined {
      if (!this.lawSelected) return undefined
      if (!this.game) return startYear
      const acceptedLaw = this.simulatedLaws.find((l) => l.lawId === this.lawSelected)
      if (acceptedLaw) return acceptedLaw.effectiveSince
      return this.game.currentYear
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

    currentYear(): GameYear {
      if (this.yearSelected) {
        return this.yearSelected
      }
      if (this.game) {
        return this.game.currentYear
      }
      return startYear
    },

    effectsOfSelected(): Change[] {
      if (!this.selectedLaw || !this.startYearOfSelected || !this.game) return []
      return this.selectedLaw.effects(this.game, this.startYearOfSelected, this.currentYear)
    },

    sortedValues(): ValueRow[] {
      if (!this.game) return []
      return getSortedValues(this.simOfYear.values, this.effectsOfLawInYear, this.effectsOfSelected)
    },

    sortedLaws(): LawRow[] {
      if (!this.game) return []
      return getSortedLaws(this.game, this.lawsSortCol, this.lawsSortDir, allLaws)
    },

    sortedEvents(): EventRow[] {
      if (!this.game) return []
      return getSortedEvents(this.game, this.eventsSortCol, this.eventsSortDir, allEvents)
    },

    effectsOfLawInYear(): BaseParams | undefined {
      return this.lawSelected ? this.simOfYear.effectsOfLaws[this.lawSelected] : undefined
    },

    simOfYear(): { values: BaseParams; effectsOfLaws: ParamsOfLaws } {
      if (this.yearSelected === undefined && this.game) {
        const effects = this.effectsOfSelected
        const values = this.game.values
        if (this.lawSelected === undefined || effects.length === 0) {
          return { values, effectsOfLaws: {} }
        }
        const nextValues = createBaseValues(values)
        const context = { dispatch: () => undefined, values: nextValues }
        applyEffects(context, effects)
        const valChanges = Object.fromEntries(paramKeys.map((k) => [k, nextValues[k] - values[k]])) as BaseParams
        return { values, effectsOfLaws: { [this.lawSelected]: valChanges } }
      } else {
        const index = this.yearSelected ? this.yearSelected - this.gameYears[0] : 0
        return this.simulation[index]
      }
    },

    simulatedValues(): BaseParams[] {
      return this.simulation.map((data) => data.values)
    },

    simEffectOfLaw(): BaseParams[] {
      if (!this.lawSelected) return gameYears.map((y) => zeroParams)
      const lawId: LawId = this.lawSelected
      return this.simulation.map((y) => {
        const effOfSel = y.effectsOfLaws[lawId]
        return effOfSel ? effOfSel : zeroParams
      })
    },

    chartData(): { values: BaseParams[]; changes: BaseParams[] } {
      return { values: this.simulatedValues, changes: this.simEffectOfLaw }
    },

    lawsInYear(): (year: number) => (LawReference & { cls: string })[] {
      return (year: number) => {
        return this.simulatedLaws.filter((l) => l.effectiveSince === year)
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
    <div v-if="showCharts" class="Details sidebyside">
      <PeekChart
        v-if="paramSelected"
        v-model:selectedYear="yearSelected"
        :chartData="chartData"
        :paramId="paramSelected"
      />
      <PeekChart v-model:selectedYear="yearSelected" :chartData="chartData" paramId="co2emissions" />
      <PeekChart v-model:selectedYear="yearSelected" :chartData="chartData" paramId="popularity" />
      <PeekChart v-model:selectedYear="yearSelected" :chartData="chartData" paramId="stateDebt" />
      <PeekChart v-model:selectedYear="yearSelected" :chartData="chartData" paramId="co2budget" />
    </div>
    <div v-if="lastSelected === 'law' && selectedLaw && showDetails" class="Details sidebyside">
      <div class="Title">{{ selectedLaw.title }}</div>
      <div class="Description">{{ selectedLaw.description }}</div>
      <div class="SectionHead">Details:</div>
      <div class="Section" v-html="selectedLaw.details" />
      <div class="SectionHead">Internes:</div>
      <div class="Section" v-html="selectedLaw.internals" />
      <div class="SectionHead">Referenzen:</div>
      <Citation class="Section" v-for="(citation, pos) in citationsOfLaw" :key="pos" :citation="citation" />
    </div>
    <div v-if="lastSelected === 'event' && selectedEvent && showDetails" class="Details sidebyside">
      <div class="Title">{{ selectedEvent.title }}</div>
      <div class="Description">{{ selectedEvent.description }}</div>
      <div class="SectionHead">Details:</div>
      <div class="Section" v-html="selectedEvent.details" />
      <div class="SectionHead">Internes:</div>
      <div class="Section" v-html="selectedEvent.internals" />
      <div class="SectionHead">Referenzen:</div>
      <Citation class="Section" v-for="(citation, pos) in selectedEvent?.citations" :key="pos" :citation="citation" />
    </div>
    <div v-if="lastSelected === 'param' && selectedParam && showDetails" class="Details sidebyside">
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
      <div class="paramsHeader">
        <div>Start of law: {{ startYearOfSelected }}</div>
        <div>Current year: {{ currentYear }}</div>
      </div>
      <table>
        <tr
          v-for="row in sortedValues"
          :key="row.id"
          :class="{ clickable: true, selected: paramSelected === row.id, [row.class]: true }"
          @click="selectParam(row.id)"
        >
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
          :class="{ clickable: true, selected: lawSelected === law.id, [law.state]: true }"
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
        <tr
          v-for="event in sortedEvents"
          :key="event.id"
          :class="{ clickable: true, selected: eventSelected === event.id }"
          @click="selectEvent(event.id)"
        >
          <td>{{ event.id }}</td>
          <td class="priocol">{{ event.probability }}</td>
        </tr>
      </table>
    </div>
    <div v-if="showYears" class="yearList sidebyside">
      <div>
        <Menu>
          <a class="clickable">Presets</a>
          <ul class="dropdown">
            <li v-for="preset in presets" :key="preset.name" class="clickable" @click="loadPreset(preset)">
              {{ preset.name }}
            </li>
          </ul>
        </Menu>
      </div>
      <table>
        <template v-for="year in gameYears" :key="year">
          <tr
            :class="{ clickable: true, selected: yearSelected === year }"
            @click="selectYear(year)"
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
            :class="{ clickable: true, selected: lawSelected === lawId, [cls]: true }"
            @click="selectLaw(lawId)"
            @click.right.prevent="removeFromSimulation(lawId)"
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
    min-width: 29em;
    th {
      font-weight: bold;
      text-align: left;
    }
    td {
      text-indent: 10pt;
    }
    .simulated {
      font-weight: bold;
      color: #9c6d00;
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

  .open {
    background-color: $hover;
  }

  .dropdown {
    position: absolute;
    background-color: #fafafa;
    margin: 0rem;
    list-style: none;
    padding: 0.4rem;
    li {
      padding: 0.1rem;
    }
  }

  .paramsHeader {
    display: flex;
    div {
      width: 10em;
      background-color: $lightBackground;
      margin: 0.2em 0.2em 0.2em 3.5em;
      padding: 0.2em 0.2em 0.2em 2em;
    }
  }
}
</style>
