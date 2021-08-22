<script lang="ts">
import { defineComponent } from "vue"
import PeekInside from "./components/PeekInside.vue"
import EventMachine, { PriorizedEvent } from "./EventMachine"
import { allEvents, Event } from "./events"
import { useStore } from "./store"

export default defineComponent({
  components: { PeekInside },

  setup() {
    const store = useStore()

    return {
      store,
      devMode: import.meta.env.DEV || localStorage.getItem("devMode") === "true",
      eventMachine: EventMachine(store, allEvents),
    }
  },

  methods: {
    updateStyle(): void {
      const height = window.innerHeight
      const width = window.innerWidth
      const scale = Math.min(height / 800, width / 1000)
      const translateX = (width - 1000 * scale) / 2
      document.documentElement.style.setProperty("--scale", `${scale}`)
      document.documentElement.style.setProperty("--translateX", `${translateX}px`)
    },
  },

  mounted() {
    setTimeout(this.updateStyle, 0)
    window.addEventListener("resize", this.updateStyle)
  },

  computed: {
    priorizedEvents(): PriorizedEvent[] {
      return this.eventMachine.getPriorizedEvents()
    },

    probability(): (event: Event) => string {
      return (event) => (event.probability(this.store) * 100).toFixed(2)
    },
  },
})
</script>

<template>
  <div class="perspective">
    <router-view />
  </div>

  <div class="peek">
    <PeekInside v-if="devMode" />
  </div>

  <div v-if="devMode" class="probabilities">
    <b>Probable Events</b>
    <ul v-if="devMode && $store.state.game">
      <li v-for="event in priorizedEvents" :key="event.id">
        <span>{{ event.title }}</span>
        <span>{{ probability(event) }}%</span>
        <span>{{ (event.priority * 100).toFixed(2) }}%</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.perspective {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform: translateX(var(--translateX)) scale(var(--scale));
  transform-origin: 0 0;
}

h1 {
  text-align: left;
  margin: 0.3em;
}

ul {
  list-style-type: "... ";
}

/* filter breaks preserve3d, so apply highlight filter to child elements */
.highlighted * {
  filter: drop-shadow(2px 4px 6px red);
}

.peek {
  display: flex;
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
}

.probabilities {
  position: fixed;
  top: calc(100% - 1.7rem);
  background: white;
  padding: 5px;
  border: 1px solid #cccccc;

  &:hover {
    top: auto;
    bottom: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 12px;

    li {
      display: flex;
      width: 100%;
      justify-content: space-between;

      span {
        padding: 0 5px;
      }

      span:first-of-type {
        flex-grow: 1;
      }
    }
  }
}
</style>
