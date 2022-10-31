<template>
  <div class="section">
    <CollapsibleSection title="Employment">
      <CollapsibleContent
        v-show="$store.state.cvData.employment.cards"
        v-for="(item, index) in $store.state.cvData.employment.cards"
        :key="index"
      >
        <CardEdit :card="item" section="employment" />
      </CollapsibleContent>
      <SpanIcon
        @button-handler="addEducation"
        class="span-icon"
        :button="button"
      />
      <CardEdit
        :directly-edit="true"
        v-show="isNewForm"
        :data="$store.state.cvData.employment.cards[0]"
        section="employment"
      />
    </CollapsibleSection>
  </div>
</template>

<script>
import CollapsibleSection from "@/components/collapse/CollapsibleSection";
import CollapsibleContent from "@/components/collapse/CollapsibleContent";
import CardEdit from "@/components/card/CardEditing";
import SpanIcon from "@/components/button/SpanIcon";
export default {
  name: "EmploymentMain",
  components: {
    SpanIcon,
    CardEdit,
    CollapsibleContent,
    CollapsibleSection,
  },
  methods: {
    addEducation() {
      this.$store.state.cvData.employment.cards.unshift({
        title: "",
        dateStart: "",
        dateEnd: "",
        rowCard: {
          subtitle: ["", ""],
          content: "",
        },
      });
      this.isNewForm = true;
    },
  },
  data() {
    return {
      isNewForm: false,
      newCard: {},
      button: {
        grid: "is",
        span: "Add new employment",
        iconClass: "fa-solid fa-plus",
      },
    };
  },
};
</script>

<style scoped lang="scss"></style>
