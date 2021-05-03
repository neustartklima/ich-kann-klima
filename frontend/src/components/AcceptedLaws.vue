<script lang="ts">
import { computed, defineComponent } from "vue"
import { Law } from "../types"
import { useStore } from "../store"

export default defineComponent({
  setup() {
    const store = useStore()

    return {
      store,
      allLaws: computed(() => store.state.allLaws),
      acceptedLaws: computed(() => store.state.game?.acceptedLaws),
    }
  },

  data() {
    return {
      opened: undefined as number | undefined,
    }
  },

  computed: {
    accepted(): Law[] {
      return this.allLaws.filter((law) => this.acceptedLaws?.some((l) => l.lawId === law.id))
    },
  },

  methods: {
    toggleOpen(index: number): void {
      this.opened = this.opened === index ? undefined : index
    },
  },
})
</script>

<template>
  <div
    v-for="(law, index) in accepted"
    :key="index"
    class="Law"
    :class="{ opened: index === opened }"
    @click="toggleOpen(index)"
  >
    <h3>{{ law.name }}</h3>
    <div>{{ law.description }}</div>
  </div>
</template>

<style lang="scss" scoped>
.Law {
  max-width: 100%;
  padding: 10px;
  border: 1px solid orange;
  border-radius: 20px;
  margin: 0.5em;
  box-sizing: border-box;

  h3 {
    margin: 0;

    + * {
      margin-top: 0.5em;
    }
  }

  div {
    display: none;
  }

  &.opened div {
    display: block;
  }
}
</style>
