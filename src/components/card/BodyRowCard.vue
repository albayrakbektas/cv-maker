<template>
  <div class="body-row-card">
    <h4
      class="f-xl"
      :class="{ 'f-xl-z': $store.state.isZoomed }"
      :style="{ color: `${getStyleProperty.value}` }"
    >
      {{ title }}
    </h4>
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
  computed: {
    getStyleProperty() {
      return this.$store.getters.getCvStyleProperty("color");
    },
  },
};
</script>

<style scoped lang="scss">
h4 {
  text-align: left;
  margin: 0;
  padding-bottom: 2em;
}
.body-row-card {
  padding: 25px 0;
  border-bottom: 1px solid #8c8c8e;
}
.content {
  display: grid;
  gap: 10px;
  align-items: center;
  &:first-child {
    padding-top: 10px !important;
  }
}
</style>
