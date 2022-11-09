<template>
  <div v-if="$route.name === 'cv'" class="display-body-right pd">
    <PersonalDetails />
    <SkillMain />
    <LanguageMain />
    <BodyRowCard v-if="getSection" title="Reference">
      <DisplayRowCard
        v-for="(item, index) of getSectionCards"
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
  computed: {
    getSection() {
      return this.$store.getters.getSection("reference");
    },
    getSectionCards() {
      return this.$store.getters.getSectionCards("reference");
    },
  },
  mounted() {
    this.data = this.$store.getters.getSectionCards("reference");
  },
  data() {
    return {
      data: null,
    };
  },
};
</script>

<style scoped lang="scss">
.display-body-right {
  min-width: 120px;
  :first-child {
  }
}
</style>
