<template>
  <div class="header-hr-container">
    <h2 :class="{ 'c-white': $store.state.cvTemplate === 'Modern' }">
      {{ header }}
    </h2>
    <div
      class="hr"
      :class="{ 'c-white': $store.state.cvTemplate === 'Modern' }"
    />
  </div>
</template>

<script>
export default {
  name: "HeaderHr",
  props: {
    header: String,
  },
};
</script>

<style scoped lang="scss">
.header-hr-container {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
}
.hr {
  //border-bottom: 1px solid black !important;
  width: 100%;
  height: 1px;
  background-color: #ffffff;
}
</style>
