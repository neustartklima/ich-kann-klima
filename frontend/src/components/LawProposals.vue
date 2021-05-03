<script lang="ts">
import { computed, defineComponent } from "vue"
import { Law, LawId } from "../types"
import { useStore } from "../store"
import { acceptLaw } from "../store/actions"

export default defineComponent({
  setup() {
    const store = useStore()

    return {
      store,
      allLaws: computed(() => store.state.allLaws),
      acceptedLaws: computed(() => store.state.game?.acceptedLaws),
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
        return !this.acceptedLaws?.some((l) => l.lawId === law.id) && !this.declined.includes(law.id)
      })
      return laws.slice(0, 6)
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
  <div class="ProposedLaws">
    <div v-for="(law, index) in proposed" :key="index" class="Law">
      <h3>{{ law.name }}</h3>
      <div>{{ law.description }}</div>

      <div class="button-bar">
        <button class="accept" @click="accept(law.id)">✓</button>
        <button class="decline" @click="decline(law.id)">✗</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ProposedLaws {
  display: flex;
  flex-wrap: wrap;

  h3 {
    margin-top: 0;
  }

  .Law {
    position: relative;
    width: 15em;
    padding: 10px;
    border: 1px solid orange;
    border-radius: 20px;
    margin: 0.5em;
    box-sizing: border-box;

    .button-bar {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    button {
      display: none;
      border: 1px solid #2c3e50;
      border-radius: 4px;
      width: 32px;
      margin-left: 5px;
      padding: 0;
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

    &:hover {
      background: orange;

      button {
        display: inline;
      }
    }
  }
}
</style>
