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
    await getCv(this.$store.state.user.uid, this.$route.params.id)
      .then((res) => {
        this.cv = res;
      })
      .then(() => {
        console.log(this.cv);
      });
  },
  methods: {
    exportToPDF() {
      const document = this.$refs.document;
      html2pdf(document, {
        margin: 0,
        filename: "vue-pdf",
      });
    },
    // async saveState() {
    //   const cv = await this.cv;
    //   this.$store.state.personalInformation = cv.personalInformation;
    //   this.$store.state.skills = cv.skills;
    //   this.$store.state.reference = cv.reference;
    //   this.$store.state.languages = cv.languages;
    //   this.$store.state.employment = cv.employment;
    //   this.$store.state.education = cv.education;
    //   console.log(this.$store.state);
    // },
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
