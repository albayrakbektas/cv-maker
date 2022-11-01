<template>
  <div class="card-main">
    <PersonalInformation />
    <EducationMain />
    <EmploymentMain />
    <ReferenceMain />
    <LanguageCollapsible />
    <SkillCollapsible />
  </div>
</template>

<script>
import PersonalInformation from "@/components/sections/PersonalInformation";
import EducationMain from "@/components/sections/EducationMain";
import EmploymentMain from "@/components/sections/EmploymentMain";
import ReferenceMain from "@/components/sections/ReferenceMain";
import LanguageCollapsible from "@/components/sections/LanguageCollapsible";
import SkillCollapsible from "@/components/sections/SkillCollapsible";
export default {
  name: "CardMain",
  components: {
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
  overflow: hidden;
  padding: 0.5rem 2rem;
  background-color: #ffffff;
  margin-top: 70px;
}
</style>
