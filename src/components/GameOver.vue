<script setup lang="ts">
import { computed } from "vue"
import { co2BudgetRating, co2Rating, financeRating, popularityRating } from "../Calculator"
import { useStore } from "../store"
import Dialog from "./Dialog.vue"

const store = useStore()

const co2 = computed(() => {
  const game = store.state.game
  if (!game) return ""
  const budget = co2BudgetRating(game)
  const emissions = co2Rating(game)
  if (budget <= 0) {
    return "sind explodiert, das Budget ist aufgebraucht. Hätte die AfD nicht besser hinbekommen."
  } else if (emissions < 5) {
    return "sind explodiert, das Budget ist zwar noch nicht ganz aufgebraucht - aber bald. Hätte die AfD nicht besser hinbekommen."
  } else if (emissions < 30) {
    return "sind nicht wirklich besser geworden. Ob da noch was zu retten ist?"
  } else if (emissions < 50) {
    return "sind vielleicht etwas gesunken, aber nicht genug, um mit dem verbleibenden Budget auszukommen."
  } else if (emissions < 80) {
    return "sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance."
  } else if (emissions < 100) {
    return "entwickeln sich auf einem guten Weg, beim nächsten Versuch klappt es bestimmt! ...ach ne, wir haben ja nur eienn Planeten."
  } else {
    return "hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!"
  }
})

const debt = computed(() => {
  const game = store.state.game
  if (!game) return ""
  const rating = financeRating(game)
  if (rating < 0) {
    return "sind dir leider aus dem Ruder gelaufen."
  } else if (rating < 25) {
    return "sind dir so gerade nicht um die Ohren geflogen. Noch nicht..."
  } else if (rating < 50) {
    return "sind wohl so gerade noch ok."
  } else {
    return "sind ausgeglichen. Die Stabilitätskriterien werden eingehalten."
  }
})

const popularity = computed(() => {
  const game = store.state.game
  if (!game) return ""
  const popularity = popularityRating(game)
  if (popularity < 0) {
    return "entspricht dem, was man von einem langhährigen Diktator erwarten kann."
  } else if (popularity < 50) {
    return "ist nicht berauschend, wiedergewählt würdest du wohl eher nicht."
  } else if (popularity < 80) {
    return "reicht aus, dass du noch länger am Ruder bleiben könntest. Gratulation!"
  } else {
    return "ist völlig unglaubwürdig - war das wirklich eine freie Wahl?"
  }
})

function newGame() {
  store.dispatch("startGame")
}
</script>

<template>
  <Dialog>
    <h2>Das Spiel ist leider zu Ende</h2>

    <p>Deine Entscheidungen haben etwas verändert - soviel kann man sagen.</p>

    <ul>
      <li>Die CO2-Emmissionen {{ co2 }}</li>
      <li>Die Staatsfinanzen {{ debt }}</li>
      <li>Deine Beliebtheit {{ popularity }}</li>
    </ul>

    <p>Gar nicht so einfach, Politiker zu sein, oder?</p>

    <div class="button-bar">
      <button @click="newGame">Neuer Versuch</button>
    </div>
  </Dialog>
</template>
