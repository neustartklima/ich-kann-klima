<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import { useStore } from "../store"
import { steps, TourStep } from "../tourSteps"
import Dialog from "./Dialog.vue"

export default defineComponent({
  setup() {
    const store = useStore()
    store.dispatch("setupTour")

    return {
      store,
    }
  },

  components: { Dialog },

  mounted() {
    this.setHighlight(this.currentStep)
  },

  computed: {
    currentStep(): TourStep | undefined {
      return steps.find((step) => step.id === this.$store.state.tour.step)
    },

    title(): string | undefined {
      return this.currentStep?.title
    },

    text(): string | undefined {
      return this.currentStep?.text
    },
  },

  watch: {
    currentStep(step: TourStep | undefined): void {
      this.setHighlight(step)
    },
  },

  methods: {
    setHighlight(step: TourStep | undefined): void {
      const current = document.querySelector(".highlighted")
      if (current) {
        current.classList.remove("highlighted")
      }
      if (step && step.highlight) {
        document.querySelector(`#${step.highlight}`)?.classList.add("highlighted")
      }
    },

    next(): void {
      this.$store.dispatch("nextTourStep")
    },

    stop(): void {
      this.$store.dispatch("stopTour")
    },
  },
})
</script>

<template>
  <Dialog v-if="title && text">
    <h2>{{ title }}</h2>
    <div v-html="text" />

    <template #buttons>
      <button @click="stop">Tour beenden</button>
      <button @click="next">Weiter</button>
    </template>
  </Dialog>
</template>

<style lang="scss" scoped></style>
