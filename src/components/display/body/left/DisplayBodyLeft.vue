<template>
  <div class="display-body-left pd">
    <h1 style="display: none">{{ smt }}</h1>
    <BodyRowCard :title="educationTitle">
      <DisplayRowCard
        v-for="(item, index) of educationCards"
        :card="item"
        :key="index"
      />
    </BodyRowCard>
    <BodyRowCard :title="employmentTitle">
      <DisplayRowCard
        v-for="(item, index) of employmentCards"
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
import { mapGetters } from "vuex";
// import { mapState } from "vuex";
export default {
  name: "DisplayBodyLeft",
  components: { DisplayRowCard, BodyRowCard },
  computed: {
    // ...mapState({
    //   cards: (state) => state.education.cards[0].title,
    // }),
    ...mapGetters["getCards"],
  },
  watch: {
    // "this.$store.getters.getCards": function (val) {
    //   this.smt = val;
    // },
    "$store.state.isChanging": {
      handler: function (val) {
        this.smt = val;
        this.educationCards = this.$store.state.education.cards;
        this.educationTitle = this.$store.state.education.title;
        this.employmentCards = this.$store.state.employment.cards;
        this.employmentTitle = this.$store.state.employment.title;
        this.referencesCards = this.$store.state.reference.cards;
        this.referencesTitle = this.$store.state.reference.title;
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    this.educationCards = this.$store.state.education.cards;
    this.educationTitle = this.$store.state.education.title;
    this.employmentCards = this.$store.state.employment.cards;
    this.employmentTitle = this.$store.state.employment.title;
    this.referencesCards = this.$store.state.reference.cards;
    this.referencesTitle = this.$store.state.reference.title;
  },
  data() {
    return {
      smt: "",
      educationCards: [],
      educationTitle: "",
      employmentCards: [],
      employmentTitle: "",
      referencesCards: [],
      referencesTitle: "",
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
