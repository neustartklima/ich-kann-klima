<script lang="ts">
import { computed, defineComponent } from "vue"
import { Law } from "../types"
import { useStore } from "../store"
import Laws from "./Laws.vue"

export default defineComponent({
  components: { Laws },

  setup() {
    const store = useStore()

    return {
      store,
      allLaws: computed(() => store.state.allLaws),
      acceptedLaws: computed(() => store.state.acceptedLaws),
    }
  },

  computed: {
    accepted(): Law[] {
      return this.allLaws.filter((law) => this.acceptedLaws.includes(law.id))
    },
  },
})
</script>

<template>
  <Laws :laws="accepted" title="Beschlossen" />
</template>
