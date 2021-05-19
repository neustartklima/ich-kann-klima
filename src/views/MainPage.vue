<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  methods: {
    start() {
      this.$router.push("/start")
    }
  },
})
</script>

<template>
  <div class="wrapper">
    <h2>Stell dir vor...</h2>

    <h3>... du bist Politiker.</h3>

    <p>
      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!
    </p>

    <p>
      Du hast vier Jahre Zeit um...
    </p>

    <ul>
      <li>Beliebtheit in der Bevölkerung zu erlangen</li>
      <li>der Klimakatastrophe entgegenzusteuern</li>
      <li>das Soll des Bundeshaushaltes zu erreichen/nicht zu übersteigen</li>
    </ul>

    <div class="button-bar">
      <button @click="start">Starte das Spiel!</button>
    </div>
  </div>
</template>
