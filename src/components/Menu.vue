<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core"
import { directive as clickaway } from "vue3-click-away"

export default defineComponent({
  directives: {
    clickaway,
  },
  setup(props, context) {
    const menuIsOpen = ref<boolean>(false)
    const toggle = () => (menuIsOpen.value = !menuIsOpen.value)
    const close = () => (menuIsOpen.value = false)
    return {
      menuIsOpen,
      toggle,
      close,
    }
  },
})
</script>

<template>
  <span @click="toggle" v-clickaway="close" class="menu" :class="{ menuIsOpen }">
    <slot />
  </span>
</template>

<style lang="scss" scoped>
.menu {
  :not(:first-child) {
    display: none;
  }
}

.menuIsOpen {
  :not(:first-child) {
    display: block;
  }
}
</style>
