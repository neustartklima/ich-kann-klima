<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core"
import { useStore } from "../store"

interface MyScreen extends Screen {
  mozOrientation: string
  msOrientation: string
}

export default defineComponent({
  setup() {
    const store = useStore()

    return {
      store,
      currentYear: computed(() => store.state.game?.currentYear as number),
    }
  },

  data() {
    return {
      orientation: "portrait",
    }
  },

  computed: {
    timespan(): number {
      return 2050 - 2021
    },

    years(): number {
      return this.currentYear - 2020
    },

    size(): string {
      const attr = this.orientation.match(/landscape/) ? "height" : "width"
      return attr + ": " + (this.years / this.timespan) * 100 + "%"
    },
  },

  mounted() {
    window.addEventListener("orientationchange", this.setOrientation)
    this.setOrientation()
  },

  methods: {
    setOrientation(): void {
      if (screen.orientation) {
        this.orientation =
          screen.orientation.type || (screen as MyScreen).mozOrientation || (screen as MyScreen).msOrientation
      } else {
        this.orientation = window.innerWidth > window.innerHeight ? "landscape" : "portrait"
      }
    },
  },
})
</script>

<template>
  <div class="Indicator" :style="size"></div>
</template>

<style lang="scss" scoped>
$color: orange;
$width: 3vh;
$border: 1px;

.Indicator {
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: orange;

  @media all and (orientation: landscape) {
    top: auto;
  }
}
</style>
