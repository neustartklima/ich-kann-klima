<script lang="ts">
import { defineComponent, PropType } from "vue"
import { Law } from "../types"

export default defineComponent({
  props: {
    title: String,
    laws: Array as PropType<Law[]>,
  },
})
</script>

<template>
  <div class="Laws">
    <h2>{{ title }}</h2>
    <div v-for="(law, index) in laws" :key="index" class="Law">
      <slot :id="law.id" />
      <h2>{{ law.name }}</h2>
      <div>{{ law.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.Laws {
  padding: 30px;
  max-width: 400px;
  list-style: none;
}

h2 {
  margin-top: 0;
}

.Law {
  width: 100%;
  padding: 10px;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  margin-bottom: 1em;
  box-sizing: border-box;
}
</style>
