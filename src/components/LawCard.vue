<script lang="ts">
import { defineComponent, PropType } from "vue"
import { LawView } from "../types"
import { useStore } from "../store"
import { mapGetters } from "vuex"

export default defineComponent({
  props: {
    law: { type: Object as PropType<LawView>, required: true },
    selectable: { type: Boolean, required: true },
    numCards: { type: Number, required: true },
  },

  setup() {
    const store = useStore()

    return { store }
  },

  data() {
    return {
      accepted: false,
    }
  },

  computed: {
    ...mapGetters(["proposedLaws"]),

    zIndex(): number {
      return this.law.zIndex
    },

    transform(): string {
      const rotation = 2 * (this.law.pos - this.numCards / 2)
      const y = Math.abs(this.numCards / 2 - this.law.pos) * 10
      return `rotate(${rotation}deg) translateY(${y}px)`
    },
  },

  methods: {
    select() {
      this.$emit('selected')
    },

    accept() {
      this.accepted = true
    },

    sendAccept() {
      this.$emit("accepted", this.law.id)
    },
  },
})
</script>

<template>
  <div
    class="Law"
    :class="{ accepted }"
    :style="{ zIndex, transform }"
    @click="select"
    @animationend="sendAccept"
  >
    <label>
      <input type="radio" v-if="selectable" />
      <div>
        <h3>{{ law.title }}</h3>
        <div>{{ law.description }}</div>

        <div class="button-bar" v-if="selectable">
          <button class="accept" @click="accept">✓</button>
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
  &.accepted {
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
      bottom: 10px;
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
