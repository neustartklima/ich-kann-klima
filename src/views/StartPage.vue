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
        <p>Wir sind:</p>
        <div id="persons">
          <div>
            <img src="../assets/ich-kann-klima-Alina-circle.jpg" />
            <p>Alina</p>
            <p>Dietrich</p>
          </div>
          <div>
            <img src="../assets/ich-kann-klima-Joachim-circle.jpg" />
            <p>Joachim</p>
            <p>Schirrmacher</p>
          </div>
          <div>
            <img src="../assets/ich-kann-klima-Lisa-circle.jpg" />
            <p>Lisa</p>
            <p>Hohmann</p>
          </div>
          <div>
            <img src="../assets/ich-kann-klima-Mathias-circle.jpg" />
            <p>Mathias</p>
            <p>de Riese</p>
          </div>
          <div>
            <img src="../assets/ich-kann-klima-Pina-circle.jpg" />
            <p>Pina</p>
            <p>Gromotka</p>
          </div>
          <div>
            <img src="../assets/ich-kann-klima-Thomas-circle.jpg" />
            <p>Thomas</p>
            <p>Olszamowski</p>
          </div>
        </div>

        <h2>Kontakt und Impressum</h2>
        <p>Alina Dietrich (V.i.S.d.P.)</p>
        <p>Hülchrather Straße 13</p>
        <p>40221 Düsseldorf</p>
        <p>+49 (151) 2667 3369</p>
        <p><a href="mailto:info@ich-kann-klima.de">info@ich-kann-klima.de</a></p>
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
  width: 100%;
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
  width: 100%;
  max-width: 40em;
}
#persons {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  @media (max-width: 70em) {
    grid-template-columns: 50% 50%;
  }
  align-items: center;
  justify-content: center;
  > div {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    > img {
      width: 100%;
    }
    > p {
      margin-top: -1em;
    }
  }
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
