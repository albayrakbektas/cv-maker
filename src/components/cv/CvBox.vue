<template>
  <router-link :to="'/cv/' + cv.id">
    <div class="cv-box-container">
      <SavedDisplay :cv="cv" class="scl" />
    </div>
  </router-link>
</template>

<script>
import SavedDisplay from "@/components/display/SavedDisplay";
export default {
  name: "CvBox",
  components: { SavedDisplay },
  props: {
    cv: Object,
  },
  mounted() {
    console.log(this.cv);
  },
  methods: {
    async saveState() {
      const cv = await this.cv;
      this.$store.state.personalInformation = cv.personalInformation;
      this.$store.state.skills = cv.skills;
      this.$store.state.reference = cv.reference;
      this.$store.state.languages = cv.languages;
      this.$store.state.employment = cv.employment;
      this.$store.state.education = cv.education;
      console.log(this.$store.state);
    },
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
