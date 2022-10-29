<template>
  <div class="display-body-left pd">
    <h1 style="display: none">{{ smt }}</h1>
    <BodyRowCard :title="education.title">
      <DisplayRowCard
        v-for="(item, index) of education.cards"
        :card="item"
        :key="index"
      />
    </BodyRowCard>
    <BodyRowCard :title="employment.title">
      <DisplayRowCard
        v-for="(item, index) of employment.cards"
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
import { getCv } from "@/firebaseMethods";
export default {
  name: "DisplayBodyLeft",
  components: { DisplayRowCard, BodyRowCard },
  props: {},
  watch: {
    "$store.state.isChanging": {
      handler: function (val) {
        this.smt = val;
        this.education = this.$store.state.cvData.education;
        this.employment = this.$store.state.cvData.employment;
      },
      immediate: true,
      deep: true,
    },
  },
  created() {},
  async mounted() {
    getCv(this.$store.state.user.uid, this.$route.params.id)
      .then((res) => {
        this.education = res.education;
        this.employment = res.employment;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  data() {
    return {
      smt: "",
      education: {},
      employment: {},
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
