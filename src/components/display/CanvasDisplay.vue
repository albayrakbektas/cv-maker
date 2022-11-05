<template>
  <!--  <canvas id="canvas" ref="canvas" height="500" width="300"></canvas>-->
  <div>
    <div id="canvas" @click="print" ref="printMe">
      <h1>Print me!</h1>
    </div>
    <img :src="output" alt="" />
  </div>
</template>

<script>
export default {
  name: "CanvasDisplay",
  data() {
    return { canvas: null, output: null };
  },
  async mounted() {
    // let c = this.$refs.canvas;
    // this.canvas = c.getContext("2d");
  },
  methods: {
    async print() {
      const el = this.$refs.printMe;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: "dataURL",
      };
      this.output = await this.$html2canvas(el, options);
    },
  },
};
</script>

<style scoped lang="scss">
#canvas {
  border: 1px solid #000000;
  width: 40vw;
  margin: 70px auto 0;
}
</style>
