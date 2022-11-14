<template>
  <div v-if="$route.name === 'cv'" class="display-body-left pd">
    <BodyRowCard
      v-if="getSectionCards('education')"
      :title="getSection.education.title || 'Education'"
    >
      <DisplayRowCard
        v-for="(item, index) of getSectionCards('education')"
        :card="item"
        :key="index"
      />
    </BodyRowCard>
    <BodyRowCard
      v-if="getSectionCards('employment')"
      :title="getSection.employment.title || 'Employment'"
    >
      <DisplayRowCard
        v-for="(item, index) of getSectionCards('employment')"
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
    getSectionCards() {
      return (section) =>
        this.$store.getters.getSectionCards(section || "education");
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
  //   getCvData(this.$store.state.user.uid, this.$route.params.id)
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
  min-width: 200px;
  max-width: 500px;
  :first-child {
    padding-top: 0 !important;
  }
  * {
    //padding: 25px 0 0 0;
  }
  :last-child {
    border: none;
  }
}
@media (max-width: 500px) {
  .display-body-left {
    min-width: unset;
  }
}
</style>
