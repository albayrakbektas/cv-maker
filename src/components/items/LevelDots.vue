<template>
  <div
    v-if="$store.state.cvTemplate === 'Modern' && range"
    ref="dots-container"
    class="level-dots-container"
  >
    <div class="dots" v-for="index in 5" :key="index"></div>
  </div>
</template>

<script>
export default {
  name: "LevelDots",
  props: {
    range: Number,
  },
  mounted() {
    this.setLevel();
  },
  methods: {
    setLevel() {
      const dots = this.$refs["dots-container"].children;
      for (let i = 0; i < this.range; i++) {
        dots[i].style.backgroundColor = "#808080";
      }
    },
  },
};
</script>

<style scoped lang="scss">
.level-dots-container {
  display: grid;
  grid-template-columns: repeat(5, min-content);
  gap: 0.2rem;
}
.dots {
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
  background-color: #000000;
}
</style>
