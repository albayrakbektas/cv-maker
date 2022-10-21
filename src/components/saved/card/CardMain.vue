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
import PersonalInformation from "@/components/saved/left/sections/PersonalInformation";
import EducationMain from "@/components/saved/left/sections/EducationMain";
import EmploymentMain from "@/components/saved/left/sections/EmploymentMain";
import ReferenceMain from "@/components/saved/left/sections/ReferenceMain";
import LanguageCollapsible from "@/components/saved/left/sections/LanguageCollapsible";
import SkillCollapsible from "@/components/saved/left/sections/SkillCollapsible";
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
