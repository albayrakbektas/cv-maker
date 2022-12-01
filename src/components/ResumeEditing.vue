<template>
  <div
    class="resume-editing-main-container"
    :class="{ 'editing-active': $store.state.isEditing }"
  >
    <div class="editing-header">
      <h2>Resume Editing</h2>
      <div class="close-editing-container">
        <ButtonMain @button-handler="closeEditing">
          <i class="fa-solid fa-xmark"></i>
        </ButtonMain>
      </div>
    </div>
    <img :src="$store.state.cvEditingP.previewSrc" alt="" />
    <div class="editing-footer">
      <SpanIcon
        :icon-style="iconStyle"
        :span-style="spanStyle"
        :button-style="buttonPrimaryStyle"
        @button-handler="edit"
        :button="saveButton"
      />
      <SpanIcon
        :icon-style="downloadSpanStyle"
        :span-style="downloadSpanStyle"
        :button-style="buttonSecondaryStyle"
        :button="deleteButton"
        @button-handler="deleteCv"
      />
      <!--            <SpanIcon-->
      <!--              :icon-style="downloadSpanStyle"-->
      <!--              :span-style="downloadSpanStyle"-->
      <!--              :button-style="buttonSecondaryStyle"-->
      <!--              :button="DownloadButton"-->
      <!--              @button-handler="download"-->
      <!--            />-->
    </div>
  </div>
</template>

<script>
import SpanIcon from "@/components/button/SpanIcon";
import ButtonMain from "@/components/button/ButtonMain";
export default {
  name: "ResumeEditing",
  components: { ButtonMain, SpanIcon },
  props: {
    cv: Object,
  },
  data() {
    return {
      isDownload: false,
      output: null,
      iconStyle: {
        color: "#000000",
        fontWeight: "900",
        fontSize: "1.6em",
        marginRight: "0.2em",
      },
      spanStyle: {
        color: "#000000",
        fontWeight: "900",
        fontSize: "1.6em",
      },
      downloadSpanStyle: {
        color: "#ffffff",
        fontWeight: "900",
        fontSize: "1.6em",
      },
      buttonPrimaryStyle: {
        background: "transparent",
        // height: "45px",
      },
      buttonSecondaryStyle: {
        backgroundColor: "#000000",
        backgroundImage:
          "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.3))",
        // height: "45px",
        marginLeft: "1.5em",
      },
      backToCvButton: {
        grid: "is",
        span: "CV's",
        iconClass: "fa-solid fa-arrow-left",
        isMobile: false,
      },
      saveButton: {
        grid: "is",
        span: "Edit",
        iconClass: "fa-solid fa-pen",
        isMobile: false,
      },
      DownloadButton: {
        grid: "is",
        span: "Download",
        iconClass: "fa-solid fa-download",
        isMobile: false,
      },
      deleteButton: {
        grid: "is",
        span: "Delete",
        iconClass: "fa-solid fa-trash",
        isMobile: false,
      },
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    closeEditing() {
      this.$store.state.isEditing = false;
    },
    edit() {
      this.$router.push("/cv/" + this.$store.state.cvEditingP.id);
    },
    async deleteCv() {
      this.$store.state.isConfirmPopup = true;
    },
    download() {
      this.$store.state.isDownloading = !this.$store.state.isDownloading;
      this.$store.state.isDownload = !this.$store.state.isDownload;
    },
  },
};
</script>

<style scoped lang="scss">
.resume-editing-main-container {
  width: 40vw;
  height: calc(100vh - 2px);
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ffffff;
  border: 1px solid #2d2d3a;
  border-bottom: none;
  z-index: 999999;
  translate: 100% 0;
  transition: all 0.4s ease-in-out;
  display: none;
}
.editing-active {
  translate: 0 0;
  display: block;
}
.editing-header {
  padding: 1rem;
  display: grid;
  align-items: center;
  background-color: #20202a;
}
.close-editing-container {
  position: absolute;
  right: 0;
  top: 0;
  translate: -25% 25%;
  color: #ffffff;
  background-color: #000000;
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0.3),
    rgba(255, 0, 0, 0.6)
  );
  border-radius: 8px;
  &:hover {
    translate: -25% 25%;
  }
}
i,
h2 {
  color: #ffffff;
}
.editing-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #2d2d3a;
}
img {
  width: 30vw;
  margin: 2rem;
  border: 1px solid #2d2d3a;
  object-fit: fill;
}
@media (max-width: 500px) {
  .resume-editing-main-container {
    width: 100vw;
  }
  img {
    margin: 2rem 0 2rem;
    width: 96vw;
  }
}
</style>
