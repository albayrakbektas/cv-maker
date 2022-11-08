<template>
  <div class="color-input-container">
    <div class="icons">
      <i class="fa-solid fa-fill"></i>
      <div class="color-model" :style="{ backgroundColor: colorValue }"></div>
      <i v-if="isShown" class="fa-solid fa-chevron-down"></i>
      <i v-else class="fa-solid fa-chevron-up"></i>
    </div>
    <input
      @click="changeVisibility"
      type="color"
      name="color"
      @input="setStyle('color', $event.target.value)"
      :value="colorValue"
    />
  </div>
</template>

<script>
export default {
  name: "ColorPicker",
  props: {
    toolTip: Object,
  },
  data() {
    return {
      isShown: false,
      colorValue: "",
    };
  },
  mounted() {
    console.log(this.getCvStyle("color").value);
    this.colorValue = this.$store.state.cvData.style.color;
  },
  computed: {
    getCvStyle() {
      return (type) => this.$store.getters.getCvStyleProperty(type);
    },
  },
  methods: {
    setStyle(type, value) {
      this.$store.commit("setStyleProperties", { type, value });
      this.colorValue = value;
    },
    changeVisibility() {
      this.isShown = !this.isShown;
    },
  },
};
</script>

<style scoped lang="scss">
input {
  position: absolute;
  opacity: 0;
  padding: 0;
  margin: 0;
}
.color-input-container {
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 4rem;
  width: fit-content;
  padding: 1rem;
  border: 1px solid transparent;
  background-image: none;
  transition: all 0.4s ease-in-out;
  border-radius: 8px;
  color: #ffffff;
  &:hover {
    border: 1px solid #8b8b8b;
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0.1),
      rgba(255, 0, 0, 0.3)
    );
  }
  * {
    cursor: pointer;
  }
}
.icons {
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
}
i {
  color: #ffffff;
  font-size: 2rem;
}
.fa-chevron-up,
.fa-chevron-down {
  padding-left: 0.8rem;
  font-size: 1.5rem;
}
.color-model {
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 8px;
  border: 1px solid #fff;
  margin-left: 0.4rem;
}
</style>
