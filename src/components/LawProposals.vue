<script lang="ts">
import { defineComponent, PropType } from "vue"
import { Law, LawId } from "../types"
import { useStore } from "../store"

export default defineComponent({
  setup() {
    const store = useStore()

    return { store }
  },

  props: {
    proposedLaws: Array as PropType<Law[]>,
  },

  methods: {
    accept(lawId: LawId) {
      this.store.dispatch("acceptLaw", { lawId })
    },

    decline(lawId: LawId) {
      this.store.dispatch("rejectLaw", { lawId })
    },
  },
})
</script>

<template>
  <div class="ProposedLaws">
    <div v-for="(law, index) in proposedLaws" :key="index" class="Law">
      <h3>{{ law.title }}</h3>
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
