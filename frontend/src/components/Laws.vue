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
  <h2 v-if="title">{{ title }}</h2>
  <div class="Laws">
    <div v-for="(law, index) in laws" :key="index" class="Law">
      <slot :id="law.id" />
      <h3>{{ law.name }}</h3>
      <div>{{ law.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.Laws {
  display: flex;
  flex-wrap: wrap;
}

h2 {
  margin: 0 1em;
}

h3 {
  margin-top: 0;
}

.Law {
  width: 15em;
  padding: 10px;
  border: 1px solid orange;
  border-radius: 20px;
  margin: .5em;
  box-sizing: border-box;
}
</style>
