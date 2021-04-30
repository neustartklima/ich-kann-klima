<script lang="ts">
import { defineComponent } from "vue"
import AcceptedLaws from "../components/AcceptedLaws.vue"
import CurrentIndicators from "../components/CurrentIndicators.vue"
import LawProposals from "../components/LawProposals.vue"
import { useStore } from "../store"
import { advanceYear } from "../store/actions"


export default defineComponent({
  components: {
    CurrentIndicators,
    LawProposals,
    AcceptedLaws,
  },

  setup() {
    const store = useStore()

    return { store }
  },

  methods: {
    advanceYear() {
      this.$store.dispatch(advanceYear())
    },
  },
})
</script>

<template>
  <CurrentIndicators />

  <p>Beschließe Gesetzesvorlagen oder lehne sie ab.</p>

  <div class="wrapper">
    <LawProposals />
    <AcceptedLaws />
  </div>

  <p>Wenn Du fertig bist, wechsle zum nächsten Jahr und sieh' Dir die Auswirkungen an.</p>

  <div class="button-bar">
    <button @click="advanceYear">Jahr abschließen</button>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.button-bar,
p {
  text-align: center;
}
</style>
