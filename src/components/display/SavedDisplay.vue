<template>
  <div
    v-if="$route.name === 'cv' || $route.name === 'home'"
    id="display-main"
    class="display-main"
    ref="document"
    :class="{ isPreviewDisplayMain: $route.name === 'home' }"
  >
    <div
      class="display-main-container"
      :class="{ isPreviewDisplayMainContainer: $route.name === 'home' }"
    >
      <div
        class="display-container"
        :class="{ isPreviewDisplayContainer: $route.name === 'home' }"
        ref="cv"
      >
        <div class="display-header-container">
          <HeaderImage />
          <DisplayHeader />
        </div>
        <div class="display-main-body">
          <DisplayBodyLeft />
          <hr />
          <DisplayBodyRight />
        </div>
        <div class="cc">
          <h6>This cv created by Bektas Albayrak</h6>
          <a target="_blank" href="https://github.com/albayrakbektas/cv-maker"
            >https://github.com/albayrakbektas/cv-maker</a
          >
        </div>
      </div>
    </div>
    <div class="display-container footer">
      <div
        class="display-footer"
        :class="{ isPreviewDisplayFooter: $route.name === 'home' }"
      >
        <TooltipButton
          v-for="(item, index) of footerLeftButtons"
          :button="item"
          :key="item.leftIcon + index"
        />
        <div class="display-footer-mid">
          <TooltipButton
            v-for="(item, index) of footerMidButtons"
            :button="item"
            :key="item.leftIcon + index"
          />
        </div>
        <TooltipButton
          v-for="(item, index) of footerRightButtons"
          :button="item"
          :key="item.leftIcon + index"
        />
      </div>
    </div>
    <div class="img-container">
      <img class="img-canvas" :src="output" alt="canvas" />
    </div>
  </div>
</template>

<script>
import DisplayHeader from "@/components/display/header/DisplayHeader";
import DisplayBodyLeft from "@/components/display/body/left/DisplayBodyLeft";
import DisplayBodyRight from "@/components/display/body/right/DisplayBodyRight";
import html2pdf from "html2pdf.js/src";
import HeaderImage from "@/components/display/header/HeaderImage";
import TooltipButton from "@/components/button/TooltipButton";
// import { getCv } from "@/firebaseMethods";
export default {
  name: "SavedDisplay",
  components: {
    TooltipButton,
    HeaderImage,
    DisplayBodyRight,
    DisplayBodyLeft,
    DisplayHeader,
  },
  props: {},
  mounted() {
    this.print();
  },
  data() {
    return {
      output: null,
      footerLeftButtons: [
        {
          toolTip: {
            type: "fontFamily",
            list: ["selam", "naber", "anslkdasdasda", "Poppins"],
          },
          leftIcon: "fa-solid fa-table",
        },
      ],
      footerMidButtons: [
        {
          toolTip: {
            type: "fontFamily",
            list: ["Arial", "Garamond", "anslkdasdasda", "Poppins"],
          },
          leftIcon: "fa-solid fa-font",
        },
        {
          toolTip: {
            type: "color",
            list: ["Red", "Blue", "Black", "Gray"],
          },
          leftIcon: "fa-solid fa-fill",
        },
      ],
      footerRightButtons: [
        {
          toolTip: {
            type: "fontFamily",
          },
          isRemoveIcon: true,
          leftIcon: "fa-solid fa-expand",
        },
      ],
    };
  },
  computed: {
    getCv() {
      return this.$store.getters.getCv;
    },
  },
  watch: {
    getCv: {
      handler: async function () {
        await this.print();
      },
      deep: true,
    },
  },
  // async created() {
  //   this.getCv();
  // await getCv(this.$store.state.user.uid, this.$route.params.id).then(
  //   (res) => {
  //     this.cv = res;
  //     this.$store.state.cvData = res;
  //   }
  // );
  // .then(() => {
  //   console.log(this.$store.state.cvData);
  // });
  // },
  methods: {
    async print() {
      const el = this.$refs.cv;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: "dataURL",
      };
      this.output = await this.$html2canvas(el, options);
    },
    exportToPDF() {
      const document = this.$refs.document;
      html2pdf(document, {
        margin: 0,
        filename: "vue-pdf",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.display-main {
  //position: fixed;
  //left: calc(60%);
  //top: calc(70px + 1rem);
  //overflow: visible;
  //background-color: rgba(250, 250, 250, 1);
  margin: 80px auto 0;
}
.display-main-container {
  //position: relative;
  //height: calc(100vh - 70px);
  //width: 50vw;
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
.display-container {
  background-color: #ffffff;
  position: fixed;
  top: calc(70px + 1rem);
  bottom: calc(70px + 2rem);
  left: 0;
  right: 70%;
  overflow: hidden;
  box-shadow: -5px 5px 15px #808080;
}
.display-header-container {
  display: grid;
  grid-template-columns: auto 5fr;
  height: 9.5rem;
  box-sizing: border-box;
}
.display-main-body {
  display: grid;
  background-color: #ffffff;
  grid-template-columns: 3fr auto 1fr;
}
.display-footer {
  height: 70px;
  background-color: #2d2d3a;
  position: fixed;
  bottom: 1rem;
  left: calc(50% + 1rem);
  right: 1rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  border-radius: 8px;
  z-index: 99999999999999999;
}
.display-footer-mid {
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.cc {
  position: absolute;
  bottom: 0;
  left: 10px;
  display: none;
  h6 {
    margin: 0;
  }
  a {
    font-size: 12px;
    text-decoration: underline;
  }
}
.isPreviewDisplayMain {
  height: 21rem !important;
  width: 14rem !important;
  position: unset !important;
}
.isPreviewDisplayMainContainer {
  height: 21rem !important;
  width: 14rem !important;
}
.isPreviewDisplayContainer {
  position: unset !important;
  height: 21rem !important;
  width: 14rem !important;
}
.isPreviewDisplayFooter {
  display: none !important;
}
.img-container {
  position: relative;
  height: calc(100vh - 140px - 3rem);
  width: calc(30vw);
}
.img-canvas {
  //position: fixed;
  //left: calc(55%);
  //top: calc(70px + 1rem);
  //z-index: 999999;
  //scale: 1;
  //height: calc(100vh - 260px);
  //object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.display-container.footer {
  z-index: 9999999;
  top: unset;
}
</style>
