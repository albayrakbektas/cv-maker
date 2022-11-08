<template>
  <i @click="$emit('event-handler')" class="f-xl" :class="iconClass" />
</template>

<script>
export default {
  name: "ZoomButton",
  props: {
    iconClass: String,
  },
};
</script>

<style scoped lang="scss">
i {
  position: relative;
  width: fit-content;
  padding: 1rem;
  border: 1px solid transparent;
  background-image: none;
  transition: all 0.4s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  &:hover {
    border: 1px solid #8b8b8b;
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0.1),
      rgba(255, 0, 0, 0.3)
    );
  }
}
</style>
