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
      <div
        class="display-footer"
        :class="{ isPreviewDisplayFooter: $route.name === 'home' }"
      ></div>
    </div>
  </div>
</template>

<script>
import DisplayHeader from "@/components/display/header/DisplayHeader";
import DisplayBodyLeft from "@/components/display/body/left/DisplayBodyLeft";
import DisplayBodyRight from "@/components/display/body/right/DisplayBodyRight";
import html2pdf from "html2pdf.js/src";
import HeaderImage from "@/components/display/header/HeaderImage";
// import { getCv } from "@/firebaseMethods";
export default {
  name: "SavedDisplay",
  components: { HeaderImage, DisplayBodyRight, DisplayBodyLeft, DisplayHeader },
  props: {},
  // data() {
  //   return {
  //     cv: {},
  //   };
  // },
  // computed: {
  //   getCv() {
  //     return this.$store.getters.getCv;
  //   },
  // },
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
  position: fixed;
  left: 50%;
  top: 70px;
  bottom: 0;
  overflow: visible;
  background-color: rgba(250, 250, 250, 1);
}
.display-main-container {
  position: relative;
  height: calc(100vh - 70px);
  width: 50vw;
}
.display-container {
  background-color: #ffffff;
  position: fixed;
  top: calc(70px + 1rem);
  bottom: calc(70px + 2rem);
  left: 60%;
  right: 10%;
  overflow: hidden;
  box-shadow: -5px 5px 15px #808080;
}
.display-header-container {
  display: grid;
  grid-template-columns: auto 5fr;
  height: 5.5rem;
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
</style>
