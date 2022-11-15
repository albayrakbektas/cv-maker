<template>
  <div
    v-if="$route.name === 'cv' || $route.name === 'home'"
    id="display-main"
    class="display-main"
    ref="document"
    :class="{
      isPreviewDisplayMain: $route.name === 'home',
      'zoomed-display-main': getIsZoomed,
      'mobile-active-display-main': getIsMobilePreview,
    }"
  >
    <div
      class="img-container"
      :class="{
        'zoomed-img-container': getIsZoomed,
        'mobile-active-img-container': getIsMobilePreview,
      }"
    >
      <div
        ref="display"
        class="display-main-container"
        :class="{
          isPreviewDisplayMainContainer: $route.name === 'home',
          'zoomed-display-main-container': getIsZoomed,
        }"
      >
        <div
          class="display-container"
          :class="{
            isPreviewDisplayContainer: $route.name === 'home',
          }"
          ref="cv"
        >
          <div
            class="display-header-container"
            :class="{
              'dhc-one': !getPersonalInformationProperties,
              'zoomed-display-header-container': getIsZoomed,
            }"
          >
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
      <div v-if="getIsMobilePreview" class="mobile-img-canvas">
        <img
          v-if="getIsMobilePreview"
          ref="img-canvas"
          class="img-canvas"
          :class="{ 'zoomed-img-canvas': isZoomIn }"
          :src="getPreviewSrc"
          alt="canvas"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DisplayHeader from "@/components/display/header/DisplayHeader";
import DisplayBodyLeft from "@/components/display/body/left/DisplayBodyLeft";
import DisplayBodyRight from "@/components/display/body/right/DisplayBodyRight";
import html2pdf from "html2pdf.js/src";
import HeaderImage from "@/components/display/header/HeaderImage";

export default {
  name: "SavedDisplay",
  components: {
    HeaderImage,
    DisplayBodyRight,
    DisplayBodyLeft,
    DisplayHeader,
  },
  props: {
    isDownload: Boolean,
  },
  mounted() {
    this.print();
  },
  data() {
    return {
      output: null,
      isZoomIn: false,
      footerLeftButtons: [
        {
          toolTip: {
            type: "fontFamily",
            list: [
              { key: "Arial", value: "Arial" },
              { key: "Cairo", value: "Cairo" },
              { key: "Calibri", value: "Calibri" },
              { key: "Courier New", value: "Courier New" },
              { key: "DejaVu Sans", value: "DejaVu Sans" },
              { key: "Garamond", value: "Garamond" },
              { key: "Georgia", value: "Georgia" },
              { key: "Helvetica", value: "Helvetica" },
              { key: "Lato", value: "Lato" },
              { key: "Noto Sans", value: "Noto Sans" },
              { key: "Noto Serif", value: "Noto Serif" },
              { key: "Poppins", value: "Poppins" },
              { key: "Times New Roman", value: "Times New Roman" },
              { key: "Trebuchet", value: "Trebuchet" },
            ],
          },
          leftIcon: "fa-solid fa-table",
        },
      ],
      footerMidButtons: [
        {
          toolTip: {
            type: "fontFamily",
            list: [
              { key: "Arial", value: "Arial" },
              { key: "Cairo", value: "Cairo" },
              { key: "Calibri", value: "Calibri" },
              { key: "Courier New", value: "Courier New" },
              { key: "DejaVu Sans", value: "DejaVu Sans" },
              { key: "Garamond", value: "Garamond" },
              { key: "Georgia", value: "Georgia" },
              { key: "Helvetica", value: "Helvetica" },
              { key: "Lato", value: "Lato" },
              { key: "Noto Sans", value: "Noto Sans" },
              { key: "Noto Serif", value: "Noto Serif" },
              { key: "Poppins", value: "Poppins" },
              { key: "Times New Roman", value: "Times New Roman" },
              { key: "Trebuchet", value: "Trebuchet" },
            ],
          },
          leftIcon: "fa-solid fa-font",
        },
        {
          toolTip: {
            type: "fontSize",
            list: [
              { key: "Xs", value: "1rem" },
              { key: "S", value: "1.2rem" },
              { key: "M", value: "1.4rem" },
              { key: "L", value: "1.6rem" },
              { key: "Xl", value: "1.8rem" },
            ],
          },
          leftIcon: "fa-solid fa-font",
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
    getCvData() {
      return this.$store.getters.getCv;
    },
    getCvStyle() {
      return this.$store.getters.getCvStyle;
    },
    getIsZoomed() {
      return this.$store.getters.getIsZoomed;
    },
    getZoomedStyle() {
      return this.$store.getters.getZoomedStyle;
    },
    getPreviewSrc() {
      return this.$store.getters.getPreviewSrc;
    },
    getPersonalInformationProperties() {
      return this.$store.getters.getPersonalInformationProperties(
        "profilePicture"
      );
    },
    getIsMobile() {
      return this.$store.getters.getIsMobile;
    },
    getIsMobilePreview() {
      return this.$store.getters.getIsMobilePreview;
    },
  },
  watch: {
    getCv: {
      handler: async function () {
        await this.print();
      },
      deep: true,
    },
    isDownload: function () {
      this.exportToPDF();
    },
    getCvStyle: {
      handler: async function () {
        await this.print();
      },
      deep: true,
    },
  },
  methods: {
    async print() {
      const el = this.$refs.cv;
      const options = {
        type: "dataURL",
      };
      this.output = await this.$html2canvas(el, options);
      this.$store.commit("setPreviewSrc", await this.$html2canvas(el, options));
    },
    exportToPDF() {
      this.$store.commit("setZoomedStyle", true);
      this.$store.commit("setIsZoomed", true);
      if (this.$store.state.zoomedStyle) {
        const document = this.$refs.cv;
        html2pdf(document, {
          margin: 0,
          filename: "deneme-pdf",
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.display-main {
  margin: 80px auto 0;
}
.zoomed-display-main {
  position: fixed;
  height: 100vh;
  left: 0;
  width: 100vw;
  background-color: #8b8b8b;
  top: 0;
  overflow: scroll;
  margin-top: 70px;
  padding: 2rem;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
}
.display-main-container {
  position: relative;
  height: 100%;
}
.zoomed-display-main-container {
  height: 1187px;
}
.display-container {
  background-color: #ffffff;
  height: 100%;
  width: fit-content;
  overflow: hidden;
  box-shadow: -5px 5px 15px #808080;
}
.display-header-container {
  display: grid;
  grid-template-columns: auto 5fr;
  height: 9.5rem;
  box-sizing: border-box;
}
.zoomed-display-header-container {
  height: 180px;
}
.dhc-one {
  grid-template-columns: 1fr;
}
.display-main-body {
  display: grid;
  background-color: #ffffff;
  grid-template-columns: minmax(240px, 500px) auto 1fr;
  height: 100%;
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
.img-container {
  position: relative;
  height: calc(100vh - 140px - 3rem);
  width: calc(30vw);
  margin: auto;
}
.zoomed-img-container {
  width: 60%;
  height: 1187px;
  margin-bottom: 14rem;
  box-sizing: border-box;
  overflow: hidden;
}
.img-canvas {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  scale: 0.9;
}
.zoomed-img-canvas {
  height: 1187px;
}
.mobile-img-canvas {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #ffffff;
}
@media (max-width: 500px) {
  .display-main {
    opacity: 0;
    width: 0;
    translate: 100vw;
    pointer-events: none;
    transition: 0.4s ease-in-out;
    margin: 70px auto 0;
  }
  .display-main-container {
    //margin-bottom: 7rem;
    //* {
    //}
  }
  //.display-main-body {
  //  grid-template-columns: 60vw auto 40vw;
  //}
  .mobile-active-display-main {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    opacity: 1;
    translate: 0;
    pointer-events: all;
    padding: 0;
  }
  .mobile-active-img-container {
    width: unset;
    height: unset;
    translate: 0;
  }
}
</style>
