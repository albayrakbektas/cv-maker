<template>
  <div>
    <MenuMain />
    <div class="cv-main-container">
      <div class="home-header">
        <h1 class="f-xxl">Cv's</h1>
        <!--        <SpanIcon-->
        <!--          @button-handler="signOut"-->
        <!--          :button="button"-->
        <!--          :span-style="spanStyle"-->
        <!--          :icon-style="spanStyle"-->
        <!--          :button-style="buttonStyle"-->
        <!--        />-->
      </div>
      <div class="cv-container">
        <NewCv />
        <div
          class="cv-box-container"
          v-for="(item, index) of cvList"
          :key="index"
        >
          <CvBox :cv="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CvBox from "@/components/cv/CvBox";
import NewCv from "@/components/cv/NewCv";
import { getCvList, signout } from "@/firebaseMethods";
import MenuMain from "@/components/menu/MenuMain";
export default {
  name: "HomeView",
  components: { MenuMain, NewCv, CvBox },
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
    this.$store.state.cvData = {
      previewSrc: "",
      style: {
        fontFamily: {},
        fontSize: {},
        color: {},
        lineHeight: {},
      },
      personalInformation: {
        profilePicture: "",
        givenName: "",
        familyName: "",
        email: "",
        headline: "",
        phone: "",
        address: "",
        postCode: "",
        city: "",
        personalDetail: {
          Website: {
            content: "",
            subtitle: ["", ""],
          },
          Linkedin: {
            content: "",
            subtitle: ["", ""],
          },
          Github: {
            content: "",
            subtitle: ["", ""],
          },
        },
      },
      education: {
        title: "",
        cards: [],
      },
      employment: {},
      skills: {},
      languages: {},
      reference: {},
    };
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
  margin-bottom: 4rem;
}
.cv-main-container {
  padding: 2rem;
  margin-left: 18vw;
}
.cv-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
i {
  color: #2d2d3a;
  font-size: 22px;
}
</style>
