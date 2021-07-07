<script lang="ts">
import { defineComponent, PropType } from "vue"
import { Law, LawId } from "../types"
import { useStore } from "../store"
import { mapGetters } from "vuex"

const TRANSITION_TIME = 0.7

export default defineComponent({
  setup() {
    const store = useStore()

    return { store }
  },

  data() {
    return {
      laws: [] as Law[],
      fadingLaw: undefined as LawId | undefined,
    }
  },

  mounted() {
    const e = this.$el as HTMLElement
    e.style.setProperty("--transitiontime", TRANSITION_TIME + "s")
  },

  computed: {
    ...mapGetters(["proposedLaws"]),
  },

  methods: {
    accept(lawId: LawId) {
      this.fadingLaw = lawId
      setTimeout(() => this.store.dispatch("acceptLaw", { lawId }), TRANSITION_TIME * 1000)
    },

    decline(lawId: LawId) {
      this.fadingLaw = lawId
      setTimeout(() => this.store.dispatch("rejectLaw", { lawId }), TRANSITION_TIME * 1000)
    },
  },

  watch: {
    proposedLaws(newLaws: Law[]) {
      const laws: Law[] = [...this.laws]
      const addedLaws: Law[] = newLaws.filter(nl => !laws.some(ol => ol.id === nl.id))

      for (var i = 0; i < laws.length; i++) {
        if (newLaws.some(nl => nl.id === laws[i].id)) {
          continue
        }
        if (addedLaws.length === 0) {
          laws.splice(i)
          continue
        }
        laws[i] = addedLaws.shift() as Law
      }
      laws.push(...addedLaws)
      this.laws = laws
    }
  }
})
</script>

<template>
  <div class="ProposedLaws">
    <div
      v-for="(law, index) in laws"
      :key="index"
      class="Law"
      :class="{ fading: law.id === fadingLaw }"
    >
      <input type="radio" name="selectedLaw" :id="law.id" />
      <label :for="law.id">
        <div>
          <h3>{{ law.title }}</h3>
          <div>{{ law.description }}</div>

          <div class="button-bar">
            <button class="accept" @click="accept(law.id)">✓</button>
            <button class="decline" @click="decline(law.id)">✗</button>
          </div>
        </div>
      </label>
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
    /* name |  duration | easing | delay | iteration-count | direction | fill-mode | play-state */
    animation: twistIn var(--transitiontime) ease-out 0s 1 normal both;
    &.fading {
      /* name |  duration | easing | delay | iteration-count | direction | fill-mode | play-state */
      animation: twistOut var(--transitiontime) ease-in 0s 1 normal both;
    }

    input {
      display: none;
    }
    @media screen and (hover) {
      :hover > div {
        background: orange;

        button {
          display: inline;
        }
      }
    }

    @media screen and (hover: none) {
      :checked + label > div {
        background: orange;

        button {
          display: inline;
        }
      }
    }

    @media (max-width: 800px) {
      font-size: 85%;
    }
    @media (max-width: 600px) {
      width: 50%;
    }

    > label > div {
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
  }
}

@keyframes twistIn {
  0% {
    transform: perspective(1000px) rotateX(0deg) rotateY(-90deg);
  }
}
@keyframes twistOut {
  100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(90deg);
  }
}
</style>
