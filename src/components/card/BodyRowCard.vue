<template>
  <div class="body-row-card">
    <h4>{{ title }}</h4>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BodyRowCard",
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
h4 {
  text-align: left;
  margin: 0;
  padding-bottom: 0.4rem;
}
.body-row-card {
  padding: 1rem 0;
  border-bottom: 1px solid #8c8c8e;
}
.content {
  &:first-child {
    padding-top: 10px !important;
  }
}
</style>
