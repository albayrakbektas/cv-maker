<template>
  <div v-if="$route.name === 'cv'" class="display-body-left pd">
    <BodyRowCard :title="getSection.education.title">
      <DisplayRowCard
        v-for="(item, index) of getSection.education.cards"
        :card="item"
        :key="index"
      />
    </BodyRowCard>
    <BodyRowCard :title="getSection.employment.title">
      <DisplayRowCard
        v-for="(item, index) of getSection.employment.cards"
        :card="item"
        :key="index"
      />
    </BodyRowCard>
    <!--    <BodyRowCard :title="referencesTitle">-->
    <!--      <DisplayRowCard-->
    <!--        v-for="(item, index) of referencesCards"-->
    <!--        :card="item"-->
    <!--        :key="index"-->
    <!--      />-->
    <!--    </BodyRowCard>-->
  </div>
</template>

<script>
import BodyRowCard from "@/components/card/BodyRowCard";
import DisplayRowCard from "@/components/card/DisplayRowCard";
export default {
  name: "DisplayBodyLeft",
  components: { DisplayRowCard, BodyRowCard },
  props: {},
  computed: {
    getSection() {
      return {
        education: this.$store.getters.getSection("education"),
        employment: this.$store.getters.getSection("employment"),
      };
    },
  },
  // watch: {
  //   "$store.state.isChanging": {
  //     handler: function (val) {
  //       this.smt = val;
  //       this.education = this.$store.state.cvData.education;
  //       this.employment = this.$store.state.cvData.employment;
  //     },
  //     immediate: true,
  //     deep: true,
  //   },
  // },
  created() {},
  // async mounted() {
  //   getCv(this.$store.state.user.uid, this.$route.params.id)
  //     .then((res) => {
  //       this.education = res.education;
  //       this.employment = res.employment;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
  data() {
    return {
      // smt: "asdasdasds",
      // education: {},
      // employment: {},
      // educationCards: [],
      // educationTitle: "",
      // employmentCards: [],
      // employmentTitle: "",
      // referencesCards: [],
      // referencesTitle: "",
    };
  },
};
</script>

<style scoped lang="scss">
.display-body-left {
  * {
    padding: 15px 0 0 0;
  }
  :first-child {
    padding-top: 0 !important;
  }
  :last-child {
    border: none;
  }
}
</style>
