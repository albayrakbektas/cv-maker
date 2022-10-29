<template>
  <div class="section">
    <CollapsibleSection title="Education">
      <CollapsibleContent
        v-for="(item, index) in $store.state.cvData.education.cards"
        :key="index"
      >
        <CardEdit :card="item" section="education" />
      </CollapsibleContent>
    </CollapsibleSection>
  </div>
</template>

<script>
import CollapsibleSection from "@/components/collapse/CollapsibleSection";
import CollapsibleContent from "@/components/collapse/CollapsibleContent";
import CardEdit from "@/components/card/CardEditing";
export default {
  name: "EducationMain",
  components: {
    CardEdit,
    CollapsibleContent,
    CollapsibleSection,
  },
  methods: {
    // getState() {
    //   let cv = this.$store.state.cvData;
    //   console.log(cv);
    // },
  },
  mounted() {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
