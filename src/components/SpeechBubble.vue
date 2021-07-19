<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  props: {
    title: String,
    text: String
  },

  methods: {
    acknowledge(): void {
      this.$emit("acknowledge");
    },
  },
})
</script>

<template>
  <div v-if="text" @click="acknowledge">
    <h2 v-if="title">{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<style lang="scss" scoped>
div {
  max-width: 400px;
  position: absolute;
  top: 25%;
  left: 10%;
  transform: translateY(-50%);
  z-index: 999;
  border: 5px solid black;
  border-radius: 1rem;
  font-weight: bold;
  font-size: 20px;
  padding: 0.7rem 1rem;
  background: white;

  &::before,
  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
  }

  &::before {
    border-width: 10px;
    border-style: solid;
    border-color: black transparent transparent black;
    left: 6px;
    bottom: -20px;
  }

  &::after {
    border-width: 7px;
    border-style: solid;
    border-color: #fff transparent transparent #fff;
    left: 10px;
    bottom: -11px;
  }

  h2 {
    margin-top: 0;
    font-size: 1.4rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0;
  }
}
</style>