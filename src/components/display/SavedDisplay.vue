<template>
  <div id="display-main" class="display-main" ref="document">
    <div class="display-main-container">
      <div class="display-container">
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
      <div class="display-footer"></div>
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
  background-color: wheat;
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
</style>
