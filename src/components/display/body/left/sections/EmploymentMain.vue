<template>
  <div class="section">
    <CollapsibleSection title="Employment">
      <CollapsibleContent
        v-for="(item, index) in $store.state.cvData.employment.cards"
        :key="index"
      >
        <CardEdit :card="item" section="employment" />
      </CollapsibleContent>
    </CollapsibleSection>
  </div>
</template>

<script>
import CollapsibleSection from "@/components/collapse/CollapsibleSection";
import CollapsibleContent from "@/components/collapse/CollapsibleContent";
import CardEdit from "@/components/card/CardEditing";
export default {
  name: "EmploymentMain",
  components: {
    CardEdit,
    CollapsibleContent,
    CollapsibleSection,
  },
};
</script>

<style scoped lang="scss"></style>
