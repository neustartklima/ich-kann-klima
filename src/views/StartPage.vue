<script setup lang="ts">
import { ref } from "vue"
import { useStore } from "../store"

const store = useStore()
type ShowMode = "nothing" | "construction" | "us"
const show = ref<ShowMode>("nothing")
function toggleShow(which: ShowMode) {
  if (which === show.value) {
    show.value = "nothing"
  } else {
    show.value = which
  }
}
</script>

<template>
  <div id="content">
    <div id="text">
      <h1>#ich-kann-klima</h1>
      <p>So? Du meinst also, Du könntest das Klima retten, wenn Du Bundeskanzler*in wärst?</p>
      <p>Hier ist Deine Chance!</p>
      <p>
        Du wurdest soeben mit großer Mehrheit gewählt, Deine Koalitionspartner folgen Dir willig. Aber womit fängst Du
        an? Welche Gesetze müssen als Erstes auf den Weg gebracht werden? Was wäre zu viel des Guten?
      </p>
    </div>
    <div id="buttons">
      <div @click="toggleShow('construction')">Achtung Baustelle</div>
      <div @click="store.dispatch('startGame', undefined)">Spiel starten</div>
      <div @click="store.dispatch('startGame', undefined)">Tour starten</div>
      <div @click="toggleShow('us')">Wer wir sind</div>
    </div>
    <div id="info">
      <template v-if="show === 'construction'">
        <p>
          Dies ist die aller erste Version. Wir hoffen, dass Spaß beim Spielen vielleicht ganz kurz mal aufkommt. Dann
          ist das Spiel aber gleich schon wieder zu Ende. Spiels nochmal, oder schicks Deinen Freunden.
        </p>
        <p>
          An ein paar Stellen haben wir mit realen Zahlen gearbeitet und Effekte nach aktuellem Stand der Forschung
          modelliert. Vieles ist sehr grob vereinfacht und oft auch schlicht geraten.
        </p>
        <p>
          Diese Version ist auf den Energiesektor beschränkt, auch wenn wir bereits Einiges für die Mobilitäts-,
          Industrie-, Gebäude- und Agrarsektoren haben.
        </p>
        <p>gibt noch viel zu tun! Willst Du dich beteiligen? Dann melde Dich bei uns.</p>
      </template>
      <template v-if="show === 'us'">
        <p>US!</p>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  // height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<style lang="scss" scoped>
#content {
  // border: 0.1px solid lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  * {
    margin: 1em;
  }
  font-size: 130%;
  font-family: "Droid Sans Mono", "Meleno Monaco", Consolas, "Courrier New", monospace;
  text-align: center;
}
#text {
  // border: 0.1px solid lightgrey;
  max-width: 30em;
}
#buttons {
  display: flex;
  flex-direction: row;
  @media (max-width: 70em) {
    flex-direction: column;
  }
  * {
    width: 10em;
    padding: 1ex 1em 1.2ex 1em;
    // padding: 10px;
    background-color: lightgrey;
  }
}

#info {
  // border: 0.1px solid lightgrey;
  // height: 10em;
  max-width: 60em;
}
</style>
