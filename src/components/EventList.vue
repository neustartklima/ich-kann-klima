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
      visible: computed(() => store?.state.game?.events.some((e) => !e.acknowledged)),
    }
  },

  methods: {
    close() {
      this.events?.filter((e) => !e.acknowledged).forEach((e) => (e.acknowledged = true))
    },
  },
})
</script>

<template>
  <div v-if="visible">
    <header>
      Breaking News!
    </header>

    <ul>
      <EventItem v-for="event in events" :key="event.title" :event="event" />
    </ul>

    <footer>
      <button @click="close">Ok</button>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
div {
  border: 2px solid red;
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
</style>
