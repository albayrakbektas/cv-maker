<template>
  <router-link :to="'/cv/' + cv.id">
    <div class="cv-box-container">
      <SavedDisplay class="scl" />
    </div>
  </router-link>
</template>

<script>
import SavedDisplay from "@/components/display/SavedDisplay";
import { getCv } from "@/firebaseMethods";
export default {
  name: "CvBox",
  components: { SavedDisplay },
  props: {
    cv: Object,
  },
  created() {
    getCv(this.$store.state.user.uid, this.cv.id).then((res) => {
      this.$store.state.cvData = res;
    });
  },
};
</script>

<style scoped lang="scss">
.cv-box-container {
  border: 1px dashed #2b2b35;
  height: 21rem;
  width: 14rem;
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
}
.scl {
  height: 100%;
  width: 100%;
  pointer-events: none;
}
</style>
