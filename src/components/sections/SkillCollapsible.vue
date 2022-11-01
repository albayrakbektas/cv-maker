<template>
  <div class="section">
    <CollapsibleSection title="Skills">
      <CollapsibleContent v-for="(item, index) of getSectionCards" :key="index">
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
import { writeSectionCard } from "@/firebaseMethods";
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
  computed: {
    getSectionCards() {
      return this.$store.getters.getSectionCards("skills");
    },
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
      range: "",
      button: {
        grid: "is",
        span: "Add new skill",
        iconClass: "fa-solid fa-plus",
      },
    };
  },
};
</script>

<style scoped></style>
