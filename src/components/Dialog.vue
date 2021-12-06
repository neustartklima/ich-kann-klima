<script setup lang="ts"></script>

<template>
  <div class="dialog">
    <slot />

    <div class="buttons">
      <slot name="buttons" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dialog {
  position: absolute;
  top: 10vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 600px;
  max-width: 90vw;
  background: white;
  border: 1px solid black;
  border-radius: 2rem;
  box-shadow: 0 0 8px rgba(100, 100, 100, 0.5);
  padding: 1rem;

  .buttons {
    float: right;
    margin-top: 1rem;

    :deep(button) {
      background-color: transparent;
      border: 2px solid #aaaaaa;
      border-radius: 4px;
      padding: 3px 15px;
      margin-left: 0.5rem;
      cursor: pointer;

      &:hover {
        background: #f7f7f7;
      }

      &:active {
        background: #eeeeee;
      }
    }
  }
}
</style>
