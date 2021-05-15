<script lang="ts">
import { computed, defineComponent } from "vue"
import GameSetup from "../components/GameSetup.vue"
import AcceptedLaws from "../components/AcceptedLaws.vue"
import LawProposals from "../components/LawProposals.vue"
import { getAnEvent } from "../EventMachine"
import { useStore } from "../store"
import { advanceYear, applyEvent } from "../store/actions"
import { Law } from "../types"
import { allEvents } from "../events"
import { getLaw } from "../LawProposer"

export default defineComponent({
  components: {
    GameSetup,
    LawProposals,
    AcceptedLaws,
  },

  setup() {
    const store = useStore()

    return {
      store,
      allLaws: computed(() => store.state.allLaws),
      acceptedLaws: computed(() => store.state.game?.acceptedLaws),
      proposedLaws: computed(() => store.state.game?.proposedLaws.map(getLaw) as Law[])
    }
  },

  data() {
    return {
      eventOccured: false,
    }
  },

  mounted() {
    setTimeout(this.initiateEvent, 20000)
  },

  methods: {
    initiateEvent() {
      const game = this.store.state.game
      if (game) {
        const event = getAnEvent(game, allEvents)
        if (event) {
          this.$store.dispatch(applyEvent(event))
        }
      }
    },

    advanceYear() {
      this.$store.dispatch(advanceYear())
    },
  },
})
</script>

<template>
  <GameSetup>
    <LawProposals :proposed-laws="proposedLaws" />

    <h2>Beschlossene Gesetze</h2>
    <AcceptedLaws />

    <p>Wenn Du fertig bist, wechsle zum nächsten Jahr und sieh' Dir die Auswirkungen an.</p>

    <div class="button-bar">
      <button @click="advanceYear">Jahr abschließen</button>
    </div>
  </GameSetup>
</template>

<style lang="scss" scoped>
h2 {
  margin: 0 1em;
}
</style>
