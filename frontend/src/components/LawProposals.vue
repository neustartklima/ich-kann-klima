<script lang="ts">
import { computed, defineComponent } from "vue"
import { Law, LawId } from "../types"
import { useStore } from "../store"
import { acceptLaw } from "../store/actions"
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

  data() {
    return {
      declined: [] as LawId[],
    }
  },

  computed: {
    proposed(): Law[] {
      const laws = this.allLaws.filter((law) => {
        return !this.acceptedLaws.includes(law.id) && !this.declined.includes(law.id)
      })
      return laws
    },
  },

  methods: {
    accept(lawId: LawId) {
      this.store.dispatch(acceptLaw(lawId))
    },

    decline(lawId: LawId) {
      this.declined.push(lawId)
    },
  },
})
</script>

<template>
  <Laws :laws="proposed" title="Gesetzesvorschläge" v-slot:default="slotProps">
    <button class="accept" @click="accept(slotProps.id)">✓</button>
    <button class="decline" @click="decline(slotProps.id)">✗</button>
  </Laws>
</template>

<style scoped>
button {
  float: right;
  border: 1px solid #2c3e50;
  border-radius: 4px;
  background: transparent;
  width: 32px;
  margin-left: 5px;
}

button:hover {
  background: #eeeeee;
}

.accept {
  font-size: 28px;
  color: green;
}

.decline {
  font-size: 30px;
  color: red;
}
</style>
