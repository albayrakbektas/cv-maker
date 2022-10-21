<template>
  <div class="section">
    <CollapsibleSection title="Skills">
      <CollapsibleContent>
        <form>
          <FormField :form-field="skillField" v-model="skillField.value" />
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
  name: "SkillCollapsible",
  components: { InputRange, FormField, CollapsibleContent, CollapsibleSection },
  watch: {
    "skillField.value": function (val) {
      this.$store.state.skills[0].subtitle[0] = val;
    },
    range: function (val) {
      this.$store.state.skills[0].content = Number(val);
    },
  },
  data() {
    return {
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
