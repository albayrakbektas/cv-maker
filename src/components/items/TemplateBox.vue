<template>
  <div @click="setTemplate(template.name)" class="template-box-container">
    <img :src="template.src" :alt="template.alt || ''" />
    <h4>{{ template.name }}</h4>
  </div>
</template>

<script>
export default {
  name: "TemplateBox",
  props: {
    template: Object,
  },
  methods: {
    setTemplate(name) {
      this.$store.commit("setCvTemplate", name);
    },
  },
};
</script>

<style scoped lang="scss">
.template-box-container {
  position: relative;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  cursor: pointer;
}
img {
  position: absolute;
  left: 50%;
  translate: -50% 0;
  height: 90%;
  border: 6px;
  box-shadow: 5px 0 15px #808080;
}
h4 {
  margin: 0;
  position: absolute;
  left: 50%;
  bottom: 0;
  translate: -50% 0;
}
</style>
