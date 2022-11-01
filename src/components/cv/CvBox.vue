<template>
  <router-link :to="'/cv/' + cv.id">
    <div class="cv-box-container">
      <SavedDisplay :cv="cv" class="scl" />
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
  computed: {
    // computedCv() {
    //   return this.$store.getters.getCv;
    // },
  },
  created() {
    getCv(this.$store.state.user.uid, this.cv.id).then((res) => {
      console.log(res);
      this.$store.state.cvData = res;
    });
    // console.log(this.computedCv);
  },
};
</script>

<style scoped lang="scss">
.cv-box-container {
  border: 1px dashed #2b2b35;
  height: 40vh;
  width: 15vw;
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
