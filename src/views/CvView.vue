<template>
  <div class="main">
    <div class="header">
      <SpanIcon
        :icon-style="iconStyle"
        :span-style="spanStyle"
        :button-style="buttonPrimaryStyle"
        @button-handler="back"
        :button="backToCvButton"
      />
      <div class="header-right">
        <SpanIcon
          :icon-style="iconStyle"
          :span-style="spanStyle"
          :button-style="buttonPrimaryStyle"
          @button-handler="save"
          :button="saveButton"
        />
        <SpanIcon
          :icon-style="iconStyle"
          :span-style="spanStyle"
          :button-style="buttonSecondaryStyle"
          :button="DownloadButton"
          @button-handler="download"
        />
      </div>
    </div>
    <div class="body">
      <CardMain />
      <SavedDisplay :is-download="isDownload" ref="cv" />
    </div>
  </div>
</template>

<script>
import CardMain from "@/components/card/CardMain";
import { getCv, writeUserData } from "@/firebaseMethods";
import SavedDisplay from "@/components/display/SavedDisplay";
import SpanIcon from "@/components/button/SpanIcon";

export default {
  name: "CvView",
  components: { SpanIcon, SavedDisplay, CardMain },
  data() {
    return {
      isDownload: false,
      output: null,
      iconStyle: {
        color: "#ffffff",
        fontWeight: "900",
        fontSize: "1.6rem",
        marginRight: "0.2rem",
      },
      spanStyle: {
        color: "#ffffff",
        fontWeight: "900",
        fontSize: "1.6rem",
      },
      buttonPrimaryStyle: {
        background: "transparent",
        height: "45px",
      },
      buttonSecondaryStyle: {
        backgroundImage:
          "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.3))",
        height: "45px",
        marginLeft: "1.5rem",
      },
      backToCvButton: {
        grid: "is",
        span: "CV's",
        iconClass: "fa-solid fa-arrow-left",
      },
      saveButton: {
        grid: "is",
        span: "Save",
        iconClass: "fa-solid fa-floppy-disk",
      },
      DownloadButton: {
        grid: "is",
        span: "Download",
        iconClass: "fa-solid fa-download",
      },
    };
  },
  async created() {
    await getCv(this.$store.state.user.uid, this.$route.params.id);
    await this.print();
  },
  methods: {
    async print() {
      const el = this.$refs.cv;
      const options = {
        type: "dataURL",
      };
      this.output = await this.$html2canvas(el, options);
    },
    back() {
      this.$router.push("/");
    },
    download() {
      this.isDownload = true;
    },
    // exportToPDF() {
    //   const document = document.getElementById("display-main");
    //   html2pdf(document, {
    //     margin: 0,
    //     filename: "vue-pdf",
    //   });
    // },
    save() {
      let userId = this.$store.state.user.uid;
      let cvId = this.$route.params.id;
      const {
        previewSrc,
        style,
        personalInformation,
        education,
        employment,
        skills,
        languages,
        reference,
      } = this.$store.state.cvData;
      writeUserData(userId, cvId, {
        id: cvId,
        previewSrc,
        style,
        personalInformation,
        education,
        employment,
        skills,
        languages,
        reference,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: #000000;
}
.body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  height: 100vh;
  background-color: #a9a9a9;
}
</style>
