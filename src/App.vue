<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  methods: {
    updateStyle(): void {
      document.documentElement.style.setProperty("--scale", "1")
      const height = window.innerHeight
      const width = window.innerWidth
      if (height / width < .8) {
        document.documentElement.style.setProperty("--scale", `${height / 800}`)
      } else {
        document.documentElement.style.setProperty("--scale", `${width / 1000}`)
      }
    },
  },

  mounted() {
    setTimeout(this.updateStyle, 0)
    window.addEventListener("resize", this.updateStyle)
  },
})
</script>

<template>
  <router-view />
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: left;
  margin: 0.3em;
}

ul {
  list-style-type: "... ";
}

/* filter breaks preserve3d, so apply highlight filter to child elements */
.highlighted * {
  filter: drop-shadow(2px 4px 6px red);
}
</style>
