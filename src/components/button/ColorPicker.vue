<template>
  <div class="color-input-container">
    <div class="icons">
      <i :style="{ color: colorValue }" class="fa-solid fa-fill"></i>
      <i :style="{ color: colorValue }" class="fa-solid fa-chevron-up"></i>
    </div>
    <label for="color"></label>
    <input
      type="color"
      name="color"
      @input="setStyle('color', $event.target.value)"
      :value="getCvStyle('color').value"
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
    seeValue(e) {
      e.target.value;
    },
  },
};
</script>

<style scoped lang="scss">
input {
  height: 50px;
  opacity: 0;
}
.color-input-container {
  position: relative;
  display: grid;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  min-width: 4rem;
}
.icons {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
}
i {
  color: #ffffff;
  font-size: 2rem;
}
</style>
