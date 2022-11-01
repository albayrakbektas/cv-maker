<template>
  <div @click="exportToPDF" class="display-main" ref="document">
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
</template>

<script>
import DisplayHeader from "@/components/display/header/DisplayHeader";
import DisplayBodyLeft from "@/components/display/body/left/DisplayBodyLeft";
import DisplayBodyRight from "@/components/display/body/right/DisplayBodyRight";
import html2pdf from "html2pdf.js/src";
import HeaderImage from "@/components/display/header/HeaderImage";
import { getCv } from "@/firebaseMethods";
export default {
  name: "SavedDisplay",
  components: { HeaderImage, DisplayBodyRight, DisplayBodyLeft, DisplayHeader },
  props: {},
  data() {
    return {
      cv: {},
    };
  },
  async mounted() {
    await getCv(this.$store.state.user.uid, this.$route.params.id).then(
      (res) => {
        this.cv = res;
        this.$store.state.cvData = res;
      }
    );
    // .then(() => {
    //   console.log(this.$store.state.cvData);
    // });
  },
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
  border-radius: 8px;
  overflow: hidden;
}
.display-header-container {
  display: grid;
  grid-template-columns: auto 5fr;
}
.display-main-body {
  display: grid;
  grid-template-columns: 3fr auto 1fr;
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
