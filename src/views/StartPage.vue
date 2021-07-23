<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import Dialog from "../components/Dialog.vue"

export default defineComponent({
  components: { Dialog },

  methods: {
    newGame() {
      this.$router.push("/games")
    },
  },
})
</script>

<template>
  <Dialog>
    <h2>Deine erste Entscheidung steht bevor...</h2>

    <p>
      Wähle weise, denn
      <u>alles hat Einfluss</u> auf deine Beliebtheit, das Klimaziel sowie den Finanzhaushalt.
    </p>

    <p>
      Durch manche Entscheidungen entstehen neue Möglichkeiten.
      <br />Es kann aber auch sein, dass du dir durch bestimmte Entscheidungen andere Möglichkeiten nimmst.
    </p>

    <p>Gar nicht so einfach, Politiker zu sein, oder?</p>

    <div class="button-bar">
      <button @click="newGame">Leg' los</button>
    </div>
  </Dialog>
</template>
