<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({})
</script>

<template>
  <h1>#ich-kann-klima</h1>
  <router-view />
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1 {
  text-align: left;
  margin: 0.3em;
}

ul {
  list-style-type: "... ";
}

.button-bar {
  max-width: 800px;
  margin: 0 auto;

  button {
    padding: 8px 16px;
  }
}
</style>
