<script lang="ts">
import { defineComponent, PropType } from "vue"
import { Law, LawId } from "../types"
import { useStore } from "../store"

export default defineComponent({
  setup() {
    const store = useStore()

    return { store }
  },

  data() {
    return {
      selectedLaw: undefined as LawId | undefined,
    }
  },

  props: {
    proposedLaws: Array as PropType<Law[]>,
  },

  methods: {
    select(lawId: LawId) {
      this.selectedLaw = lawId
    },

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
    <div v-for="(law, index) in proposedLaws" :key="index" class="Law" :class="{ selected: law.id === selectedLaw }">
      <div @click="select(law.id)">
        <h3>{{ law.title }}</h3>
        <div>{{ law.description }}</div>

        <div class="button-bar">
          <button class="accept" @click="accept(law.id)">✓</button>
          <button class="decline" @click="decline(law.id)">✗</button>
        </div>
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
    width: 33%;
    padding: 0.5rem;
    box-sizing: border-box;

    @media (max-width: 800px) {
      font-size: 85%;
    
    }
    @media (max-width: 600px) {
      width: 50%;
    }

    > div {
      border: 1px solid orange;
      border-radius: 20px;
      padding: 0.5rem;
      position: relative;

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
        background: white;
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
    }

    &:hover,
    &.selected {
      > div {
        background: orange;

        button {
          display: inline;
        }
      }
    }
  }
}
</style>
