<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()

const emit = defineEmits<{
  (e: "acknowledge"): void
}>()

function acknowledge() {
  emit("acknowledge")
}
</script>

<template>
  <div @click="acknowledge">
    <h2>{{ title }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<style lang="scss" scoped>
div {
  max-width: 250px;
  position: absolute;
  top: 45%;
  left: -5%;
  //transform: translateY(-50%);
  z-index: 999;
  border: 1px solid black;
  border-radius: 2rem;
  font-weight: bold;
  font-size: 20px;
  padding: 1rem;
  background: white;
  box-shadow: 0 0 8px rgba(100, 100, 100, 0.5);

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
    border-color: transparent black black transparent;
    right: 29px;
    top: -21px;
  }

  &::after {
    border-width: 9px;
    border-style: solid;
    border-color: transparent #fff #fff transparent;
    right: 30px;
    top: -18px;
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
