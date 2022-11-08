<template>
  <div class="section">
    <CollapsibleSection title="Languages">
      <CollapsibleContent v-for="(item, index) of getSectionCards" :key="index">
        <CardEdit
          :card="item"
          :is-skill="true"
          type="languages"
          section="languages"
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
import SpanIcon from "@/components/button/SpanIcon";
import { v4 as uuidv4 } from "uuid";
import { writeSectionCard } from "@/firebaseMethods";
export default {
  name: "LanguageCollapsible",
  components: { SpanIcon, CardEdit, CollapsibleContent, CollapsibleSection },
  computed: {
    getSectionCards() {
      return this.$store.getters.getSectionCards("languages");
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
        "languages",
        card
      );
      this.$store.commit("addCard", { section: "languages", card });
      this.isNewForm = true;
    },
  },
  data() {
    return {
      range: "",
      languageList: null,
      button: {
        grid: "is",
        span: "Add new language",
        iconClass: "fa-solid fa-plus",
      },
    };
  },
};
</script>

<style scoped></style>
