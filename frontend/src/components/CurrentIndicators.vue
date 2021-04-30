<script lang="ts">
import { defineComponent } from "vue"
import TimeIndicator from "../components/TimeIndicator.vue"

export default defineComponent({
  components: { TimeIndicator },

  data() {
    return {
      indicators: [
        { id: "1", name: "CO2 Emmissionen", value: 805, unit: "Mio t" },
        { id: "2", name: "Bruttoinlandsprodukt", value: 2300, unit: "Mrd €" },
        { id: "3", name: "Arbeitslosenzahl", value: 2700, unit: "Tsd." },
      ],
    }
  },
})
</script>

<template>
  <ul>
    <li v-for="(indicator, index) in indicators" :key="index">
      <div>{{ indicator.name }}</div>
      <div>{{ indicator.value }} {{ indicator.unit }}</div>
    </li>
  </ul>
  <TimeIndicator />
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
