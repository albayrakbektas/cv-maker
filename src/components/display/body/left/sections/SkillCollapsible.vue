<template>
  <div class="section">
    <CollapsibleSection title="Skills">
      <CollapsibleContent
        v-for="(item, index) of $store.state.cvData.skills.cards"
        :key="index"
      >
        <CardEdit
          :card="item"
          :is-skill="true"
          type="skills"
          section="skills"
        />
      </CollapsibleContent>
      <SpanIcon
        @button-handler="addEducation"
        class="span-icon"
        :button="button"
      />
    </CollapsibleSection>
  </div>
</template>

<script>
import CollapsibleSection from "@/components/collapse/CollapsibleSection";
import CollapsibleContent from "@/components/collapse/CollapsibleContent";
import CardEdit from "@/components/card/CardEditing";
import { getCv, writeSectionCard } from "@/firebaseMethods";
import SpanIcon from "@/components/button/SpanIcon";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "SkillCollapsible",
  components: {
    SpanIcon,
    CardEdit,
    CollapsibleContent,
    CollapsibleSection,
  },
  async mounted() {
    getCv(this.$store.state.user.uid, this.$route.params.id).then((res) => {
      this.skillList = res.skills;
    });
  },
  methods: {
    addEducation() {
      let card = {
        id: uuidv4(),
        subtitle: ["", ""],
        content: "",
      };
      writeSectionCard(
        this.$store.state.user.uid,
        this.$route.params.id,
        "skills",
        card
      );
      this.$store.dispatch("addCard", { section: "skills", card });
      this.isNewForm = true;
    },
  },
  data() {
    return {
      skillList: null,
      range: "",
      button: {
        grid: "is",
        span: "Add new skill",
        iconClass: "fa-solid fa-plus",
      },
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
