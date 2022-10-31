<template>
  <div class="level-container">
    <span>Level</span>
    <div class="input-range-container">
      <input
        type="range"
        min="0"
        max="5"
        step="1"
        name="range"
        :value="Number(value)"
        @input="$emit('input', $event.target.value)"
      />
      <label for="range">{{ degree }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputRange",
  props: {
    value: String,
  },
  watch: {
    value: function (val) {
      this.degree = this.valueToText(val);
    },
  },
  methods: {
    valueToText(val) {
      let degree = "";
      switch (Number(val)) {
        case 0:
          degree = "Choose one";
          break;
        case 1:
          degree = "Beginner";
          break;
        case 2:
          degree = "Moderate";
          break;
        case 3:
          degree = "Good";
          break;
        case 4:
          degree = "Very Good";
          break;
        case 5:
          degree = "Fluent";
      }
      return degree;
    },
  },
  data() {
    return {
      degree: "Good",
    };
  },
};
</script>

<style scoped lang="scss">
.level-container {
  text-align: left;
}
.input-range-container {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  width: 60%;
  gap: 15px;
  * {
    cursor: pointer;
  }
}
label {
  font-size: 1rem;
  font-weight: 500;
}
</style>
