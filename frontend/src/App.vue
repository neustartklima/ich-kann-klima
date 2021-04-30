<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({ })
</script>

<template>
  <h1>#ich-kann-klima</h1>

  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}

h1 {
  text-align: center;
}

.game-setup {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}

.wrapper {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
