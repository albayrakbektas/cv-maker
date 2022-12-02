<template>
  <div
    class="body-row-card"
    :class="{ modern: $store.state.cvTemplate ?? 'Modern' }"
  >
    <div class="card-title-container">
      <h4
        class="f-xl"
        :class="{
          'f-xl-z': $store.state.isZoomed,
          'c-white': titleStyle,
        }"
        :style="{ color: `${getStyleProperty.value}` }"
      >
        {{ title }}
      </h4>
      <div
        class="hr"
        :style="hrStyle"
        v-show="$store.state.cvTemplate ?? 'Modern'"
      />
    </div>
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
    hrStyle: Object,
    titleStyle: String,
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
.modern {
  padding: 0;
  border-bottom: none;
  .card-title-container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    align-items: center;
    padding-bottom: 1em;
    box-sizing: border-box;
    .hr {
      height: 1px;
      width: calc(100% - 4em);
      background-color: #000000;
      padding: 0 2rem;
    }
  }
}
//.c-white {
//  color: #ffffff;
//}
</style>
