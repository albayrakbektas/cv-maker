<template>
  <div class="section">
    <CollapsibleSection title="References">
      <CollapsibleContent v-for="(item, index) of getSectionCards" :key="index">
        <CardEdit :card="item" section="reference" />
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
  name: "ReferenceMain",
  components: { SpanIcon, CardEdit, CollapsibleContent, CollapsibleSection },
  computed: {
    getSectionCards() {
      return this.$store.getters.getSectionCards("reference");
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
        "reference",
        card
      );
      this.$store.dispatch("addCard", { section: "reference", card });
      this.isNewForm = true;
    },
  },
  data() {
    return {
      button: {
        grid: "is",
        span: "Add new reference",
        iconClass: "fa-solid fa-plus",
      },
      card: {
        title: "Maths",
        dateStart: "",
        dateEnd: "",
        rowCard: {
          subtitle: ["", ""],
          content: "Description",
        },
      },
    };
  },
};
</script>

<style scoped></style>
