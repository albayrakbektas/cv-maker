<template>
  <div class="cv-main-container">
    <div class="home-header">
      <h1 class="f-xxl">Cv's</h1>
      <SpanIcon
        @button-handler="signOut"
        :button="button"
        :span-style="spanStyle"
        :icon-style="spanStyle"
        :button-style="buttonStyle"
      />
    </div>
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
import { getCvList, signout } from "@/firebaseMethods";
import SpanIcon from "@/components/button/SpanIcon";
export default {
  name: "HomeView",
  components: { SpanIcon, NewCv, CvBox },
  data() {
    return {
      cvList: [],
      button: {
        span: "Exit",
        iconClass: "fa-solid fa-right-from-bracket",
        grid: "is",
      },
      spanStyle: {
        color: "#ffffff",
        fontWeight: "900",
      },
      buttonStyle: {
        backgroundColor: "rgba(0, 0, 0, 1)",
        backgroundImage:
          "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.3))",
        height: "45px",
      },
    };
  },
  async mounted() {
    this.cvList = await getCvList(this.$store.state.user.uid);
  },
  methods: {
    async signOut() {
      await signout();
      await this.$router.push("/login");
    },
  },
};
</script>

<style scoped lang="scss">
.home-header {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
}
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
i {
  color: #2d2d3a;
  font-size: 22px;
}
</style>
