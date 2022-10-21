<template>
  <div class="display-body-right pd">
    <PersonalDetails />
    <SkillMain />
    <LanguageMain />
    <BodyRowCard :title="referencesTitle">
      <DisplayRowCard
        v-for="(item, index) of referencesCards"
        :card="item"
        :key="index"
      />
    </BodyRowCard>
  </div>
</template>

<script>
import PersonalDetails from "@/components/display/body/right/sections/PersonalDetails";
import SkillMain from "@/components/display/body/right/sections/SkillMain";
import LanguageMain from "@/components/display/body/right/sections/LanguageMain";
import BodyRowCard from "@/components/card/BodyRowCard";
import DisplayRowCard from "@/components/card/DisplayRowCard";
export default {
  name: "DisplayBodyRight",
  components: {
    DisplayRowCard,
    BodyRowCard,
    LanguageMain,
    SkillMain,
    PersonalDetails,
  },
  created() {
    this.referencesCards = this.$store.state.reference.cards;
    this.referencesTitle = this.$store.state.reference.title;
  },
  data() {
    return {
      referencesCards: [],
      referencesTitle: "",
    };
  },
};
</script>

<style scoped lang="scss">
.display-body-right {
  :first-child {
  }
}
</style>
