<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({})
</script>

<template>
  <router-view />

  <details class="attribution">
    <summary>Attribution</summary>
    <ul>
      <li>CO2 symbol: Tommaso.sansone91, CC0 1.0, via Wikimedia commons</li>
      <li>Euro coin: Verdy_p, Public domain, via Wikimedia commons</li>
      <li>Clapping hands: pngimg.com, CC 4.0 BY-NC</li>
    </ul>
  </details>
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

.game-setup {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
}

.wrapper {
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
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

.attribution {
  position: fixed;
  bottom: -1px;
  right: -1px;
  padding: 0 5px;
  font-size: 10px;
  background: white;

  &[open] {
    border: 1px solid #cccccc;
  }
}
</style>
