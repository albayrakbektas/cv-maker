<template>
  <div class="section">
    <CollapsibleSection title="Education">
      <CollapsibleContent v-for="(item, index) in getSectionCards" :key="index">
        <CardEdit :card="item" section="education" />
      </CollapsibleContent>
      <SpanIcon
        @button-handler="addEducation"
        class="span-icon"
        :button="button"
      />
      <CardEdit
        :directly-edit="true"
        v-show="isNewForm"
        :data="getSectionCards"
        section="education"
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
  name: "EducationMain",
  components: {
    SpanIcon,
    CardEdit,
    CollapsibleContent,
    CollapsibleSection,
  },
  computed: {
    getSectionCards() {
      return this.$store.getters.getSectionCards("education");
    },
  },
  methods: {
    addEducation() {
      let card = {
        id: uuidv4(),
        title: "",
        dateStart: {
          month: "",
          year: "",
        },
        dateEnd: {
          month: "",
          year: "",
        },
        rowCard: {
          subtitle: ["", ""],
          content: "",
        },
      };
      writeSectionCard(
        this.$store.state.user.uid,
        this.$route.params.id,
        "education",
        card
      );
      this.$store.dispatch("addCard", { section: "education", card });
      this.isNewForm = true;
    },
  },
  mounted() {},
  data() {
    return {
      isNewForm: false,
      button: {
        grid: "is",
        span: "Add new education",
        iconClass: "fa-solid fa-plus",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.span-icon {
  width: fit-content;
}
</style>
