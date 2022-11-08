<template>
  <div style="cursor: pointer" @click="openCv">
    <div class="cv-box-container">
      <img :src="cv.previewSrc" alt="" />
      <div @click.stop="showOptions" class="options">
        <ZoomButton icon-class="fa-solid fa-ellipsis-vertical" />
        <div v-if="isShown" class="cv-options-main">
          <SpanIcon
            @button-handler="deleteCv(cv)"
            :button="deleteButton"
            :button-style="buttonStyle"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deleteCv, getCv } from "@/firebaseMethods";
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
      isShown: false,
      deleteButton: {
        grid: "is",
        iconClass: "fa-solid fa-trash",
        span: "Delete",
      },
      buttonStyle: {
        border: "none",
      },
    };
  },
  created() {
    getCv(this.$store.state.user.uid, this.cv.id).then((res) => {
      this.$store.state.cvData = res;
    });
  },
  methods: {
    openCv() {
      this.$router.push("/cv/" + this.$props.cv.id);
    },
    showOptions() {
      this.isShown = !this.isShown;
    },
    deleteCv(cv) {
      deleteCv(this.$store.state.user.uid, cv.id);
      location.reload();
    },
  },
};
</script>

<style scoped lang="scss">
.cv-box-container {
  border: 1px solid #2b2b35;
  height: 34rem;
  width: 24rem;
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
  height: 34rem;
  width: 24rem;
  filter: none;
  transition: all 0.4s ease-in-out;
}
.options {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
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
  translate: -100%;
  background-color: #fff;
  border: 1px solid #2d2d3a;
  border-radius: 8px;
  padding: 0.5rem 1rem;
}
</style>
