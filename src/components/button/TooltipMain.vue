<template>
  <div class="tooltip-main-container">
    <ul>
      <li
        @click="setStyle(toolTip.type, item)"
        v-for="(item, index) in toolTip.list"
        :key="index"
      >
        <i
          v-if="getCvStyle(toolTip.type) === item"
          class="fa-solid fa-check f-xl"
        ></i>
        <div class="item f-xl">{{ item }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TooltipMain",
  props: {
    toolTip: Object,
  },
  computed: {
    getCvStyle() {
      return (type) => this.$store.getters.getCvStyleProperty(type);
    },
  },
  methods: {
    setStyle(type, value) {
      this.$store.commit("setStyleProperties", { type, value });
    },
  },
};
</script>

<style scoped lang="scss">
.tooltip-main-container {
  position: absolute;
  border: 1px solid #000000;
  left: 0;
  bottom: 2rem;
  min-width: 70px;
  border-radius: 8px;
  background-color: #ffffff;
}
ul {
  padding-inline-start: 0;
}
li {
  list-style: none;
  padding: 1rem;
  box-sizing: border-box;
  text-align: left;
  text-decoration: none;
  color: #000000;
  display: grid;
  grid-template-columns: 20px 1fr;
  transition: all 0.4s ease-in-out;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  background-image: none;
  &:hover {
    color: #ffffff;
    background-color: #000000;
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0.3),
      rgba(255, 0, 0, 0.6)
    );
  }
}
</style>
