<template>
  <button
    :style="buttonStyle"
    type="button"
    @click.stop="$emit('button-handler')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonMain",
  props: {
    buttonStyle: Object,
  },
};
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  background: none;
  border: 1px solid #8b8b8b;
  border-radius: 8px;
  padding: 1rem;
  position: relative;
}
</style>
