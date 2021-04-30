<script lang="ts">
import { computed, defineComponent } from "vue"
import { mapState } from "vuex"
import { useStore } from "../store"

export default defineComponent({
  data() {
    return {
      indicators: [
        { id: "1", name: "CO2 Emmissionen", value: 805, unit: "Mio t" },
        { id: "2", name: "Bruttoinlandsprodukt", value: 2300, unit: "Mrd €" },
        { id: "3", name: "Arbeitslosenzahl", value: 2700, unit: "Tsd." },
      ],
    }
  },

  setup() {
    const store = useStore()

    return {
      store,
      currentYear: computed(() => store.state.game?.currentYear),
    }
  },
})
</script>

<template>
  <ul>
    <li>
      <div>Aktuelles Jahr</div>
      <div>{{ currentYear }}</div>
    </li>
    <li v-for="(indicator, index) in indicators" :key="index">
      <div>{{ indicator.name }}</div>
      <div>{{ indicator.value }} {{ indicator.unit }}</div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  padding: 30px;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #2c3e50;
  border-radius: 4px;
}

li {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
