<template>
  <div
    class="card-main"
    :class="{ 'card-main-mobile-hidden': getIsMobilePreview }"
  >
    <PersonalInformation />
    <EducationMain />
    <EmploymentMain />
    <ReferenceMain />
    <LanguageCollapsible />
    <SkillCollapsible />
    <ShowDisplay />
  </div>
</template>

<script>
import PersonalInformation from "@/components/sections/PersonalInformation";
import EducationMain from "@/components/sections/EducationMain";
import EmploymentMain from "@/components/sections/EmploymentMain";
import ReferenceMain from "@/components/sections/ReferenceMain";
import LanguageCollapsible from "@/components/sections/LanguageCollapsible";
import SkillCollapsible from "@/components/sections/SkillCollapsible";
import ShowDisplay from "@/components/button/ShowDisplay";
export default {
  name: "CardMain",
  components: {
    ShowDisplay,
    SkillCollapsible,
    LanguageCollapsible,
    ReferenceMain,
    EmploymentMain,
    EducationMain,
    PersonalInformation,
  },
  computed: {
    getIsMobilePreview() {
      return this.$store.getters.getIsMobilePreview;
    },
  },
};
</script>

<style scoped lang="scss">
.card-main {
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0.5em 2em;
  background-color: #ffffff;
  margin-top: 70px;
  translate: 0 0;
  transition: 0.6s ease-in-out;
}
@media (max-width: 500px) {
  .card-main-mobile-hidden {
    //width: 0;
    //height: 0;
    //opacity: 0;
    padding: 0;
    translate: -100vw;
  }
}
</style>
