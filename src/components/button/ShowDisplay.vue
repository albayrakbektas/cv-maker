<template>
  <div ref="con" class="show-display-container" v-if="isMobile">
    <i class="fa-solid fa-play f-xl"></i>
    <span class="f-xl">Preview</span>
  </div>
</template>

<script>
export default {
  name: "ShowDisplay",
  computed: {
    isMobile() {
      return this.$store.getters.getIsMobile;
    },
    showY() {
      return this.$refs.con.getBoundingClientRect().bottom;
    },
    windowInnerHeight() {
      return this.$refs.con.offsetHeight;
    },
  },
  watch: {
    windowInnerHeight: function (val) {
      console.log(val);
    },
    showY: function (val) {
      console.log(val);
    },
  },
  mounted() {
    console.log(this.windowInnerHeight);
    console.log(this.showY);
  },
};
</script>

<style scoped lang="scss">
.show-display-container {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-radius: 8px;
  background-color: #000000;
  width: fit-content;
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0.1),
    rgba(255, 0, 0, 0.3)
  );
  gap: 1rem;
}
i,
span {
  color: #ffffff;
}
</style>
