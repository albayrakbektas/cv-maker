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
  </div>
</template>

<script>
import DisplayHeader from "@/components/display/header/DisplayHeader";
import DisplayBodyLeft from "@/components/display/body/left/DisplayBodyLeft";
import DisplayBodyRight from "@/components/display/body/right/DisplayBodyRight";
import html2pdf from "html2pdf.js/src";
import HeaderImage from "@/components/display/header/HeaderImage";
export default {
  name: "DisplayMain",
  components: { HeaderImage, DisplayBodyRight, DisplayBodyLeft, DisplayHeader },
  data() {
    return {};
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
  //box-shadow: 5px 5px 15px #8c8c8e;
}
.display-header-container {
  display: grid;
  grid-template-columns: auto 5fr;
}
.display-main-body {
  display: grid;
  grid-template-columns: 3fr auto 1fr;
  //border: 1px solid #8c8c8e;
  //border-bottom: none;
}
</style>
