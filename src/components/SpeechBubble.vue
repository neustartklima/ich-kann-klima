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
  top: 20%;
  left: 15%;
  transform: translateY(-50%);
  z-index: 999;
  border: 1px solid black;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 20px;
  padding: 1rem;
  background: white;
  box-shadow: 0 0 8px rgba(100,100,100,.5);

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
    left: 27px;
    bottom: -20px;
  }

  &::after {
    border-width: 9px;
    border-style: solid;
    border-color: #fff transparent transparent #fff;
    left: 30px;
    bottom: -14px;
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