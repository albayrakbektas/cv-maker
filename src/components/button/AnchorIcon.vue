<template>
  <a target="_blank" :href="anchor.href">
    <i v-show="anchor.content" :class="anchor.iconClass"></i>
    {{ anchor.content }}
  </a>
</template>

<script>
export default {
  name: "AnchorIcon",
  props: {
    anchor: Object,
  },
};
</script>

<style scoped lang="scss">
a {
  display: grid;
  grid-template-columns: auto 1fr;
  width: fit-content;
  align-items: center;
  color: #8c8c8e;
  text-decoration: none;
  font-size: 0.55rem;
}
i {
  color: #8c8c8e;
  padding-right: 5px;
  font-size: 0.5rem;
}
</style>
