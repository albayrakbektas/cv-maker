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
          @button-handler="exportToPDF"
          :button="DownloadButton"
        />
      </div>
    </div>
    <div class="body">
      <CardMain />
      <SavedDisplay ref="cv" />
    </div>
  </div>
</template>

<script>
import CardMain from "@/components/card/CardMain";
import { getCv, writeUserData } from "@/firebaseMethods";
import SavedDisplay from "@/components/display/SavedDisplay";
import SpanIcon from "@/components/button/SpanIcon";
import html2pdf from "html2pdf.js/src";

export default {
  name: "CvView",
  components: { SpanIcon, SavedDisplay, CardMain },
  data() {
    return {
      iconStyle: {
        color: "#ffffff",
        fontWeight: "900",
        fontSize: "1.1rem",
        marginRight: "0.2rem",
      },
      spanStyle: {
        color: "#ffffff",
        fontWeight: "900",
        fontSize: "1rem",
      },
      buttonPrimaryStyle: {
        background: "transparent",
        height: "45px",
      },
      buttonSecondaryStyle: {
        backgroundImage:
          "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.3))",
        height: "45px",
        marginLeft: "1rem",
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
    await getCv(this.$store.state.user.uid, this.$route.params.id)
      .then((res) => {
        this.$store.dispatch("updateCvData", res);
      })
      .then(() => {
        console.log(this.$store.state.cvData);
      });
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    download() {
      document.addEventListener("click", () => {
        this.$refs.cv.click();
      });
    },
    exportToPDF() {
      console.log("ss");
      const document = document.getElementById("display-main");
      html2pdf(document, {
        margin: 0,
        filename: "vue-pdf",
      });
    },
    save() {
      let userId = this.$store.state.user.uid;
      let cvId = this.$route.params.id;
      const {
        personalInformation,
        education,
        employment,
        skills,
        languages,
        reference,
      } = this.$store.state.cvData;
      writeUserData(userId, cvId, {
        id: cvId,
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
  padding: 0 1rem;
  background-color: #000000;
}
.body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
}
</style>
