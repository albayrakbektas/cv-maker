<template>
  <div class="section">
    <CollapsibleSection title="Languages">
      <CollapsibleContent
        v-for="(item, index) of $store.state.cvData.languages"
        :key="index"
      >
        <CardEdit
          :card="item"
          :is-skill="true"
          type="languages"
          section="languages"
        />
      </CollapsibleContent>
    </CollapsibleSection>
  </div>
</template>

<script>
import CollapsibleSection from "@/components/collapse/CollapsibleSection";
import CollapsibleContent from "@/components/collapse/CollapsibleContent";
import CardEdit from "@/components/card/CardEditing";
export default {
  name: "LanguageCollapsible",
  components: { CardEdit, CollapsibleContent, CollapsibleSection },
  watch: {
    "languageField.value": function (val) {
      this.$store.state.languages[0].content = val;
    },
    range: function (val) {
      this.$store.state.languages[0].content = Number(val);
    },
  },
  data() {
    return {
      range: "",
      languageField: {
        tag: "input",
        type: "text",
        name: "language",
        label: "Language",
        placeholder: "",
        value: "",
      },
    };
  },
};
</script>

<style scoped></style>
