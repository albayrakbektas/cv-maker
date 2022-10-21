<template>
  <div class="section">
    <CollapsibleSection title="Languages">
      <CollapsibleContent>
        <form>
          <FormField
            :form-field="languageField"
            v-model="languageField.value"
          />
          <InputRange v-model="range" />
        </form>
      </CollapsibleContent>
    </CollapsibleSection>
  </div>
</template>

<script>
import CollapsibleSection from "@/components/collapse/CollapsibleSection";
import CollapsibleContent from "@/components/collapse/CollapsibleContent";
import FormField from "@/components/form/FormField";
import InputRange from "@/components/form/InputRange";
export default {
  name: "LanguageCollapsible",
  components: { InputRange, FormField, CollapsibleContent, CollapsibleSection },
  watch: {
    "languageField.value": function (val) {
      this.$store.state.languages[0].subtitle[0] = val;
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
