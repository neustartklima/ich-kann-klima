<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({})
</script>

<template>
  <div class="wrapper">
    <p>
      Teste Dein Können und finde heraus, ob Du einen besseren Plan von Klimapolitik hast als Merkel, Habeck und Co.
    </p>

    <p>
      Ich kann Klima führt Dich durch 12 Bereiche - vom Verkehr über die Energie bis hin zur Landwirtschaft - und
      überlässt es Dir, was Deutschland tun soll, um die Klimakatastrophe abzuwenden.
    </p>

    <p>
      Am Ende erfährst Du, ob du einfallsloser bist als die AfD oder kosteneffektiver als die Grünen. Teile Dein
      Ergebnis mit Freunden und fordere sie heraus.
    </p>

    <router-link to="/games">Starte das Spiel!</router-link>
  </div>
</template>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.button-bar {
  max-width: 800px;
  margin: 0 auto;

  button {
    padding: 8px 16px;
  }
}
</style>
