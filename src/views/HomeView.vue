<template>
  <div class="home-main">
    <MenuMain />
    <div class="cv-main-container">
      <div class="home-header">
        <h1 class="f-xxl">Resumes</h1>
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
          v-for="(item, index) of getCvList"
          :key="index"
        >
          <CvBox :cv="item" />
        </div>
      </div>
    </div>
    <ResumeEditing />
  </div>
</template>

<script>
import CvBox from "@/components/cv/CvBox";
import NewCv from "@/components/cv/NewCv";
import { getCv, getCvList, signout } from "@/firebaseMethods";
import MenuMain from "@/components/menu/MenuMain";
import ResumeEditing from "@/components/ResumeEditing";
export default {
  name: "HomeView",
  components: { ResumeEditing, MenuMain, NewCv, CvBox },
  data() {
    return {
      customFieldTitle: "Resume",
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
        // height: "45px",
      },
    };
  },
  computed: {
    getCvList() {
      return this.$store.getters.getCvList;
    },
    getIsDownloading() {
      return this.$store.getters.getIsDownloading;
    },
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  async created() {
    await getCv(this.getUser.uid, this.$store.state.cvEditingP.id);
  },
  async mounted() {
    this.$store.commit(
      "setCvList",
      await getCvList(this.$store.state.user.uid)
    );
    await this.resizeInput();
    // this.cvList = await getCvList(this.$store.state.user.uid);
    // this.$store.state.cvData = {
    //   previewSrc: "",
    //   style: {
    //     fontFamily: {},
    //     fontSize: {},
    //     color: {},
    //     lineHeight: {},
    //   },
    //   personalInformation: {
    //     profilePicture: "",
    //     givenName: "",
    //     familyName: "",
    //     email: "",
    //     headline: "",
    //     phone: "",
    //     address: "",
    //     postCode: "",
    //     city: "",
    //     personalDetail: {
    //       Website: {
    //         content: "",
    //         subtitle: ["", ""],
    //       },
    //       Linkedin: {
    //         content: "",
    //         subtitle: ["", ""],
    //       },
    //       Github: {
    //         content: "",
    //         subtitle: ["", ""],
    //       },
    //     },
    //   },
    //   education: {
    //     title: "",
    //     cards: [],
    //   },
    //   employment: {},
    //   skills: {},
    //   languages: {},
    //   reference: {},
    // };
  },
  methods: {
    async signOut() {
      await signout();
      await this.$router.push("/login");
    },
  },
  watch: {
    // getIsDownloading: function (val) {
    //   console.log("VALLL---->>>>>" + val);
    //   if (val) {
    //     getCv(this.getUser.uid, this.$store.state.cvEditingP.id);
    //   }
    // },
  },
};
</script>

<style scoped lang="scss">
.home-main {
  overflow-x: hidden;
}
.home-header {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
}
h1 {
  text-align: left;
  margin-bottom: 2em;
}
.cv-main-container {
  padding: 2em;
  margin-left: 18vw;
  min-height: 100vh;
  box-sizing: border-box;
}
.cv-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.cv-box-container {
  margin-bottom: 2em;
  position: relative;
}
i {
  color: #2d2d3a;
  font-size: 22px;
}
@media (max-width: 500px) {
  .cv-main-container {
    margin-left: 0;
    padding: 6em 2em 0;
  }
  .cv-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 0 2em;
  }
  h1 {
    margin-bottom: revert;
  }
}
</style>
