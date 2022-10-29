<template>
  <button type="button" @click.stop="$emit('button-handler')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonMain",
};
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  background: none;
  border: 1px solid #8b8b8b;
  border-radius: 8px;
  padding: 0.5rem;
}
</style>
