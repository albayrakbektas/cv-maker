<template>
  <a class="f-s" target="_blank" :href="anchor.href">
    <i class="f-s" v-show="anchor.content" :class="anchor.iconClass"></i>
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
}
i {
  color: #8c8c8e;
  padding-right: 2px;
  font-size: 0.65rem;
}
</style>
