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
      <div>
        <SavedDisplayModern style="display: none" ref="cv" />
        <SavedDisplay :is-download="isDownload" ref="cv" />
        <DisplayFooter />
      </div>
    </div>
  </div>
</template>

<script>
import CardMain from "@/components/card/CardMain";
import { getCv, writeUserData } from "@/firebaseMethods";
import SavedDisplay from "@/components/display/SavedDisplay";
import SpanIcon from "@/components/button/SpanIcon";
import DisplayFooter from "@/components/display/body/right/footer/DisplayFooter";
import SavedDisplayModern from "@/components/display/SavedDisplayModern";

export default {
  name: "CvView",
  components: {
    SavedDisplayModern,
    DisplayFooter,
    SpanIcon,
    SavedDisplay,
    CardMain,
  },
  data() {
    return {
      isDownload: false,
      output: null,
      iconStyle: {
        color: "#ffffff",
        fontWeight: "900",
        fontSize: "1.6em",
        marginRight: "0.2em",
      },
      spanStyle: {
        color: "#ffffff",
        fontWeight: "900",
        fontSize: "1.6em",
      },
      buttonPrimaryStyle: {
        background: "transparent",
        // height: "45px",
      },
      buttonSecondaryStyle: {
        backgroundImage:
          "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.3))",
        // height: "45px",
        marginLeft: "1.5em",
      },
      backToCvButton: {
        grid: "is",
        span: "CV's",
        iconClass: "fa-solid fa-arrow-left",
        isMobile: this.$store.state.isMobile,
      },
      saveButton: {
        grid: "is",
        span: "Save",
        iconClass: "fa-solid fa-floppy-disk",
        isMobile: this.$store.state.isMobile,
      },
      DownloadButton: {
        grid: "is",
        span: "Download",
        iconClass: "fa-solid fa-download",
        isMobile: this.$store.state.isMobile,
      },
    };
  },
  async created() {
    await getCv(this.getUser.uid, this.$route.params.id);
    await this.print();
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    getCvData() {
      return this.$store.getters.getCvData;
    },
  },
  watch: {
    "$store.state.isDownload": function (val) {
      if (val) {
        this.isDownload = true;
      }
    },
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
      this.$store.state.isDownload = !this.$store.state.isDownload;
      // this.isDownload = !this.isDownload;
    },
    save() {
      let userId = this.getUser.uid;
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
      } = this.getCvData;
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
  padding: 0 2em;
  background-color: #000000;
}
.header-right {
  display: flex;
}
.body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  height: 100vh;
  background-color: #a9a9a9;
}
@media (max-width: 500px) {
  .body {
    grid-template-columns: repeat(2, auto);
    overflow-x: hidden;
  }
}
h1 {
  position: fixed;
  bottom: 1em;
  width: 100%;
}
</style>
