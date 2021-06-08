<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core"
import { useStore } from "../store"
import EventItem from "./EventItem.vue"

export default defineComponent({
  components: { EventItem },

  setup() {
    const store = useStore()

    return {
      store,
      events: computed(() => store.state.game?.events),
    }
  },

  data() {
    return {
      visible: false as boolean,
    }
  },

  methods: {
    close() {
      this.visible = false
      this.events?.filter((e) => !e.acknowledged).forEach((e) => (e.acknowledged = true))
    },

    show() {
      this.visible = true
    },
  },
})
</script>

<template>
  <div v-if="visible">
    <header>
      News Ticker
    </header>

    <ul v-if="events?.length">
      <EventItem v-for="event in events" :key="event.title" :event="event" />
    </ul>
    <p v-else>
      Keine Nachrichten bisher
    </p>

    <footer>
      <button @click="close">Ok</button>
    </footer>
  </div>
  <button v-else @click="show">
    News
  </button>
</template>

<style lang="scss" scoped>
div {
  border: 2px solid red;
  border-radius: 6px;
  padding: 10px;
}

header {
  font-size: 24px;
  color: red;
  text-align: center;
}

ul {
  padding: 0 1rem;
}

button {
  display: inline-block;
  width: 60px;
  margin-left: 10px;
  background: white;
  border: 1px solid #888;
  border-radius: 4px;
  padding: 5px 10px;
}
</style>
