<template>
  <div class="card-main">
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
};
</script>

<style scoped lang="scss">
.card-main {
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0.5rem 2rem;
  background-color: #ffffff;
  margin-top: 70px;
}
//@media (max-width: 500px) {
//  .card-main {
//    overflow: ;
//  }
//}
</style>
