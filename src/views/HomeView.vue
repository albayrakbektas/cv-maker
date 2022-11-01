<template>
  <div class="cv-main-container">
    <h1>Cv's</h1>
    <div class="cv-container">
      <NewCv />
      <div v-for="(item, index) of cvList" :key="index">
        <CvBox :cv="item" />
      </div>
    </div>
  </div>
</template>

<script>
import CvBox from "@/components/cv/CvBox";
import NewCv from "@/components/cv/NewCv";
import { getCvList } from "@/firebaseMethods";
export default {
  name: "HomeView",
  components: { NewCv, CvBox },
  data() {
    return {
      cvList: [],
    };
  },
  async mounted() {
    this.cvList = await getCvList(this.$store.state.user.uid);
  },
  methods: {},
};
</script>

<style scoped lang="scss">
h1 {
  text-align: left;
}
.cv-main-container {
  padding: 2rem;
}
.cv-container {
  display: flex;
  gap: 2rem;
}
</style>
