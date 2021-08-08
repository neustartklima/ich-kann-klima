<script lang="ts">
import { defineComponent, PropType } from "vue"
import { LawView } from "../laws"
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
      const x = Math.abs(this.numCards / 2 - this.law.pos) * 20
      return `rotate(${rotation}deg) translate(${x}px, -50%)`
    },
  },

  methods: {
    select() {
      this.$emit('selected')
    },

    accept() {
      this.accepted = true
    },

    sendAccept(event: AnimationEvent) {
      if (event.animationName.match(/^twistOut-/)) {
        this.$emit("accepted", this.law.id)
      }
    },
  },
})
</script>

<template>
  <div
    class="Law"
    :class="{ accepted }"
    :style="{ zIndex }"
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
  width: 250px;
  height: 300px;
  padding: 0.5rem;
  box-sizing: border-box;
  margin: 0 auto;
  transform: rotate(3deg);

  &:not(:first-of-type) {
    margin-top: -300px;
  }

  &:nth-of-type(odd) {
    transform: rotate(-3deg);
  }

  @media (max-width: 800px) {
    width: 50%;
    height: 80%;
    font-size: 1.3vw;

    &:not(:first-of-type) {
      margin-top: -150px;
    }
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
    }
  }

  @media screen and (hover: none) {
    :checked + label > div {
      background: orange;
    }
  }

  h3 {
    margin-top: 0;
  }

  > label > div {
    height: 100%;
    border: 1px solid #aaaaaa;
    padding: 0.5rem;
    position: relative;
    background: white;
    box-shadow: 2px 2px 10px rgba(150, 150, 150, 0.5);

    .button-bar {
      position: absolute;
      bottom: 5px;
      right: 5px;
    }

    button {
      border: none;
      width: 32px;
      margin-left: 5px;
      padding: 0;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s;
    }

    .accept {
      font-size: 28px;
      color: green;

      &:hover {
        transform: scale(1.5);
      }
    }
  }
}

.ProposedLaws.poppedUp .Law {
  &:not(:first-of-type) {
    margin-top: -250px;
  }
  
  @media (max-width: 800px) and (orientation: portrait) {
    font-size: 3vw;
    width: 100%;
    margin-top: -110px;
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
