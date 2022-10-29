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
import PersonalInformation from "@/components/display/body/left/sections/PersonalInformation";
import EducationMain from "@/components/display/body/left/sections/EducationMain";
import EmploymentMain from "@/components/display/body/left/sections/EmploymentMain";
import ReferenceMain from "@/components/display/body/left/sections/ReferenceMain";
import LanguageCollapsible from "@/components/display/body/left/sections/LanguageCollapsible";
import SkillCollapsible from "@/components/display/body/left/sections/SkillCollapsible";
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
}
</style>
