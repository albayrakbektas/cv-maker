<template>
  <div class="section">
    <CollapsibleSection title="Skills">
      <CollapsibleContent
        v-for="(item, index) of $store.state.cvData.skills"
        :key="index"
      >
        <CardEdit :card="item" :is-skill="true" type="skills" />
      </CollapsibleContent>
    </CollapsibleSection>
  </div>
</template>

<script>
import CollapsibleSection from "@/components/collapse/CollapsibleSection";
import CollapsibleContent from "@/components/collapse/CollapsibleContent";
import CardEdit from "@/components/card/CardEditing";
import { getCv } from "@/firebaseMethods";
export default {
  name: "SkillCollapsible",
  components: {
    CardEdit,
    CollapsibleContent,
    CollapsibleSection,
  },
  async mounted() {
    getCv(this.$store.state.user.uid, this.$route.params.id).then((res) => {
      this.skillList = res.skills;
    });
  },
  data() {
    return {
      skillList: null,
      range: "",
      skillField: {
        tag: "input",
        type: "text",
        name: "skill",
        label: "Skill",
        placeholder: "",
        value: "",
      },
    };
  },
};
</script>

<style scoped></style>
