<script lang="ts">
import { defineComponent, PropType } from "vue"
import { Law, LawId } from "../types"
import { Actions, useStore } from "../store"
import { mapGetters } from "vuex"

export default defineComponent({
  props: {
    law: {
      type: Object as PropType<Law>,
      required: true,
    },
    selectable: Boolean,
  },

  setup() {
    const store = useStore()

    return { store }
  },

  data() {
    return {
      acceptedIds: [] as LawId[],
      rejectedIds: [] as LawId[],
      poppedUp: false,
    }
  },

  computed: {
    ...mapGetters(["proposedLaws"]),

    removing() {
      return (id: LawId) => this.acceptedIds.includes(id) || this.rejectedIds.includes(id)
    },
  },

  methods: {
    accept(lawId: LawId) {
      this.acceptedIds.push(lawId)
    },

    decline(lawId: LawId) {
      this.rejectedIds.push(lawId)
    },

    handle(lawId: LawId) {
      this.removeAndDispatch(lawId, this.acceptedIds, "accept")
      this.removeAndDispatch(lawId, this.rejectedIds, "reject")
    },

    removeAndDispatch(lawId: LawId, activeIds: LawId[], action: "accept" | "reject") {
      const i = activeIds.indexOf(lawId)
      if (i < 0) return
      activeIds.splice(i, 1)
      this.$emit(action, { lawId })
    },
  },
})
</script>

<template>
  <div class="Law" :class="{ removing: removing(law.id) }" @animationend="handle(law.id)">
    <label :for="law.id">
      <input type="radio" name="selectedLaw" :id="law.id" v-if="selectable" />
      <div>
        <h3>{{ law.title }}</h3>
        <div>{{ law.description }}</div>

        <div class="button-bar" v-if="selectable">
          <button class="accept" @click="accept(law.id)">✓</button>
          <button class="decline" @click="decline(law.id)">✗</button>
        </div>
      </div>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.Law {
  position: relative;
  width: 33%;
  padding: 0.5rem;
  box-sizing: border-box;

  &:not(:first-of-type) {
    margin-left: -20%;
  }

  /* name |  duration | easing | delay | iteration-count | direction | fill-mode | play-state */
  animation: twistIn var(--transitiontime) ease-out 0s 1 normal both;
  &.removing {
    animation-name: twistOut;
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

  h3 {
    margin-top: 0;
  }

  > label > div {
    height: 100%;
    border: 1px solid orange;
    border-radius: 20px;
    padding: 0.5rem;
    position: relative;
    background: white;
    box-shadow: 5px 5px 10px #cccccc;

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
