<template>
  <div class="cv-box-main-container" style="cursor: pointer">
    <div @click="editCv" class="cv-box-container">
      <img :src="cv.previewSrc" alt="" />
      <div @click.stop="showOptions" class="options">
        <ZoomButton icon-class="fa-solid fa-ellipsis-vertical" />
        <ul v-if="isShown" class="cv-options-main">
          <li>
            <SpanIcon
              @button-handler="openCv"
              :button="editButton"
              :button-style="buttonStyle"
              :icon-style="iconStyle"
              :span-style="iconStyle"
            />
          </li>
          <li>
            <SpanIcon
              @button-handler="deleteCv"
              :button="deleteButton"
              :button-style="buttonStyle"
              :icon-style="iconStyle"
              :span-style="iconStyle"
            />
          </li>
        </ul>
      </div>
    </div>
    <div class="resume-title">
      <input
        @focusout="handleFocusout"
        @keyup.enter="handleFocusout"
        ref="input-title"
        class="input-title"
        placeholder="Resume"
        v-model="customFieldTitle"
      />
    </div>
  </div>
</template>

<script>
import { getCv, getCvName, setCvName } from "@/firebaseMethods";
import ZoomButton from "@/components/button/ZoomButton";
import SpanIcon from "@/components/button/SpanIcon";
export default {
  name: "CvBox",
  components: { SpanIcon, ZoomButton },
  props: {
    cv: Object,
  },
  data() {
    return {
      customFieldTitle: "",
      isShown: false,
      editButton: {
        grid: "is",
        iconClass: "fa-solid fa-pen",
        span: "Edit",
      },
      iconStyle: {
        fontSize: "1em",
      },
      deleteButton: {
        grid: "is",
        iconClass: "fa-solid fa-trash",
        span: "Delete",
      },
      buttonStyle: {
        border: "none",
        width: "100%",
        padding: "0.5em 0",
        translate: "0 0",
      },
    };
  },
  async created() {
    getCv(this.getUser.uid, this.cv.id).then((res) => {
      this.$store.commit("updateCvData", res);
    });
    this.customFieldTitle =
      (await getCvName(this.getUser.uid, this.cv.id)) || "Resume";
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  watch: {
    customFieldTitle: function () {
      this.resizeInput();
    },
  },
  methods: {
    openCv() {
      this.$store.state.cvData = this.cv;
      this.$store.state.cvEditingP = this.cv;
      this.$router.push("/cv/" + this.cv.id);
    },
    editCv() {
      this.$store.state.cvData = this.cv;
      this.$store.state.cvEditingP = this.cv;
      this.$store.state.isEditing = true;
    },
    async resizeInput() {
      const input = await this.$refs["input-title"];
      if (input.value) {
        input.style.width = input.value.length + 1 + "ch";
      } else {
        input.style.width = input.placeholder.length + 1 + "ch";
      }
    },
    async handleFocusout(e) {
      await setCvName(this.$store.state.user.uid, this.cv.id, e.target.value);
    },
    showOptions() {
      this.isShown = !this.isShown;
    },
    async deleteCv() {
      this.$store.state.cvEditingP = this.cv;
      this.$store.state.isConfirmPopup = true;
    },
  },
};
</script>

<style scoped lang="scss">
.cv-box-main-container {
  position: relative;
}
.cv-box-container {
  border: 1px solid #2b2b35;
  height: 34em;
  width: 24em;
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  position: relative;
  transition: all 0.4s ease-in-out;
  &:hover {
    border: 1px solid #800080;
    img {
      filter: blur(0.5px);
    }
    * {
      color: #ff0000;
    }
  }
}
.scl {
  height: 100%;
  width: 100%;
  pointer-events: none;
  display: none;
}
img {
  height: 34em;
  width: 24em;
  filter: none;
  transition: all 0.4s ease-in-out;
}
li {
  padding: 0.5rem 0 0.5rem 1rem;
  &:hover {
    background-color: rgba(128, 128, 128, 0.5);
    * {
      color: #ffffff !important;
    }
  }
}
.options {
  position: absolute;
  right: 1em;
  bottom: 1em;
  z-index: 99;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 1);
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0.1),
    rgba(255, 0, 0, 0.3)
  );
  i {
    border: none;
  }
}
.cv-options-main {
  position: absolute;
  right: 0;
  bottom: 0;
  translate: 0 102%;
  background-color: #fff;
  border: 1px solid #2d2d3a;
  border-radius: 6px;
  padding: 0.5em 0;
  z-index: 9999;
  min-width: 10vw;
  width: max-content;
}
.resume-title {
  position: absolute;
  left: 2%;
  bottom: 0;
  translate: 0 100%;
  max-width: 23em;
  input {
    background-color: transparent;
    outline: none;
    border: none;
    position: relative;
    font-weight: 900;
    padding: 1em 0;
    margin: 0;
    max-width: 30ch !important;
    color: #2d2d3a !important;
    &:focus {
      border-bottom: 1px solid #20202a !important;
    }
  }
}
@media (max-width: 500px) {
  .cv-box-container {
    height: 100%;
    width: 100%;
    margin-bottom: 4rem;
  }
  img {
    height: calc((50vw - 2em) * 1.414);
    width: 100%;
  }
  .cv-options-main {
    min-width: 30vw;
  }
}
</style>
