<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core"
import { useStore } from "../store"
import { eventAcknowledged } from "../store/actions"
import { Event } from "../types"

export default defineComponent({
  setup() {
    const store = useStore()

    return {
      store,
      event: computed(() => store.state.visibleEvent as Event),
    }
  },

  methods: {
    close() {
      this.store.dispatch(eventAcknowledged())
    },
  },
})
</script>

<template>
  <div class="dialog" v-if="event">
    <div>
      <header>
        Breaking News!
      </header>

      <main>
        <h2>{{ event.title }}</h2>
        <p>{{ event.description }}</p>
      </main>

      <footer>
        <button @click="close">Ok</button>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    width: 400px;
    max-width: 100%;
    padding: 15px;
    background: white;

    footer {
      text-align: right;
    }
  }
}
</style>
