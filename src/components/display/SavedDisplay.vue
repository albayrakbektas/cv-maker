<template>
  <div
    v-if="$route.name === 'cv' || $route.name === 'home'"
    id="display-main"
    class="display-main"
    ref="document"
    :class="{
      isPreviewDisplayMain: $route.name === 'home',
      'zoomed-display-main': getIsZoomed,
    }"
  >
    <div class="img-container" :class="{ 'zoomed-img-container': getIsZoomed }">
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
            :class="{ 'dhc-one': !getPersonalInformationProperties }"
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
      <div class="footer">
        <div
          class="display-footer"
          :class="{
            isPreviewDisplayFooter: $route.name === 'home',
            'zoomed-display-footer': getIsZoomed,
          }"
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
            <ColorPicker />
          </div>
          <ZoomButton
            @event-handler="zoomImg"
            icon-class="fa-solid fa-expand"
          />
        </div>
      </div>
      <!--      <img-->
      <!--        @click="imgToPdf"-->
      <!--        ref="img-canvas"-->
      <!--        class="img-canvas"-->
      <!--        :class="{ 'zoomed-img-canvas': isZoomIn }"-->
      <!--        :src="output"-->
      <!--        alt="canvas"-->
      <!--      />-->
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
import ColorPicker from "@/components/button/ColorPicker";
import ZoomButton from "@/components/button/ZoomButton";

export default {
  name: "SavedDisplay",
  components: {
    ZoomButton,
    ColorPicker,
    TooltipButton,
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
    getIsZoomed() {
      return this.$store.getters.getIsZoomed;
    },
    getPersonalInformationProperties() {
      return this.$store.getters.getPersonalInformationProperties(
        "profilePicture"
      );
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
  },
  methods: {
    zoomImg() {
      if (this.getIsZoomed) {
        this.$store.commit("setIsZoomed", false);
      } else {
        this.$store.commit("setIsZoomed", true);
      }
    },
    async print() {
      const el = this.$refs.cv;
      const options = {
        type: "dataURL",
      };
      this.output = await this.$html2canvas(el, options);
      this.$store.commit("setPreviewSrc", await this.$html2canvas(el, options));
    },
    exportToPDF() {
      const document = this.$refs.display;
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
  margin-top: 7rem;
  padding: 2rem;
  box-sizing: border-box;
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
  overflow: hidden;
  box-shadow: -5px 5px 15px #808080;
}
.display-header-container {
  display: grid;
  grid-template-columns: auto 5fr;
  height: 9.5rem;
  box-sizing: border-box;
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
.zoomed-display-footer {
  left: 1rem;
}
.display-footer-mid {
  display: grid;
  grid-template-columns: repeat(3, auto);
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
.zoomed-img-container {
  width: 60%;
  height: 1187px;
  translate: 20vw;
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
}
.zoomed-img-canvas {
  height: 1187px;
}
.display-container.footer {
  z-index: 9999999;
  top: unset;
}
@media (max-width: 500px) {
  .display-main {
    display: none;
  }
}
</style>
