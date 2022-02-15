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

function startTour() {
  localStorage.setItem("tour", "start")
  store.dispatch("startGame", undefined)
}
</script>

<template>
  <div id="screen">
    <div id="content">
      <div class="text">
        <h1>#ich-kann-klima</h1>
        <p>So? Du meinst also, Du könntest das Klima retten, wenn Du Bundeskanzler*in wärst?</p>
        <p>Hier ist Deine Chance!</p>
        <p>
          Du wurdest soeben mit großer Mehrheit gewählt, Deine Koalitionspartner folgen Dir willig. Aber womit fängst Du
          an? Welche Gesetze müssen als Erstes auf den Weg gebracht werden? Was wäre zu viel des Guten?
        </p>
      </div>
      <div id="buttons">
        <a href="#construction" @click="toggleShow('construction')">Achtung Baustelle</a>
        <div @click="store.dispatch('startGame', undefined)">Spiel starten</div>
        <div @click="startTour">Tour wiederholen</div>
        <a href="#us" @click="toggleShow('us')">Wer wir sind</a>
      </div>
      <div id="construction" class="text" v-if="show === 'construction'">
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
        <p>Gibt noch viel zu tun! Willst Du dich beteiligen? Dann melde Dich bei uns.</p>
      </div>
      <div id="us" class="text" v-if="show === 'us'">
        <p>
          Erste Ideen wurden entwickelt auf dem Hackathon "Neustart Klima" im März 2021 unter dem Arbeitstitel
          "Klima-Wahl-Rechner".
        </p>
        <p>Ein Teil des Teams blieb dabei und entwickelte die Ideen weiter.</p>
        <p>Wir sind: Anne, Bernd, Clara, Daniel, Elsa, Frido, Gesa und Horst.</p>
        <p>TODO: Mit Nachnamen? Fotos? Wer soll / will dabei sein?</p>
        <h2>Kontakt und Impressum</h2>
        <p>Mario Mustermann (V.i.S.d.P.)</p>
        <p>Musterstraße 22</p>
        <p>22222 Musterhausen</p>
        <p>+49 (222) 2222 2222</p>
        <p><a href="mailto:info@ich-kann-klima.de">info@ich-kann-klima-de</a></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
<style lang="scss" scoped>
#screen {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
}
#screen::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, Edge and Opera */
}
#content {
  // border: 0.1px solid lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  * {
    margin: 1em;
  }
  font-size: 130%;
  font-family: "Droid Sans Mono", "Meleno Monaco", Consolas, "Courrier New", monospace;
  text-align: center;
}
.text {
  // border: 0.1px solid lightgrey;
  max-width: 40em;
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
    cursor: pointer;
  }
}
a {
  text-decoration: inherit;
  color: inherit;
}
</style>
