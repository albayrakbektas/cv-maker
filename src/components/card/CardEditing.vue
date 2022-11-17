<template>
  <div class="card-editing-container">
    <div v-if="isEditing" class="editing-form">
      <FormSkill v-if="isSkill" :data="card" :type="type" />
      <FormCard v-if="!isSkill" :data="card" :section="section" />
      <div class="editing-form-bottom">
        <SpanIcon
          @button-handler="deleteCard(section, card.id)"
          :button="deleteButton"
        />
        <SpanIcon
          :icon-style="spanStyle"
          :span-style="spanStyle"
          :button-style="saveButtonStyle"
          @button-handler="saveCard(section, card)"
          :button="saveButton"
        />
      </div>
    </div>
    <CardShortcut v-if="!isEditing" @event-handler="editHandler" :card="card" />
  </div>
</template>

<script>
import SpanIcon from "@/components/button/SpanIcon";
import FormCard from "@/components/card/FormCard";
import CardShortcut from "@/components/card/CardShortcut";
import FormSkill from "@/components/form/FormSkill";
import { deleteSectionCard, writeSectionCard } from "@/firebaseMethods";
import { mapGetters } from "vuex";
export default {
  name: "CardEdit",
  components: { FormSkill, SpanIcon, FormCard, CardShortcut },
  props: {
    card: Object,
    isSkill: Boolean,
    type: String,
    section: String,
    directlyEdit: Boolean,
  },
  computed: {
    ...mapGetters(["getCardById"]),
  },
  mounted() {},
  data() {
    return {
      isEditing: false,
      deleteButton: {
        iconClass: "fa-solid fa-trash-can",
        grid: "is",
        span: "",
      },
      saveButton: { iconClass: "fa-solid fa-check", grid: "is", span: "Ok" },
      spanStyle: {
        color: "#ffffff",
        fontWeight: "900",
        fontSize: "1.5em",
      },
      saveButtonStyle: {
        backgroundColor: "rgba(0, 0, 0, 1)",
        backgroundImage:
          "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.3))",
        // height: "45px",
      },
    };
  },
  methods: {
    editHandler() {
      this.isEditing = !this.isEditing;
    },
    deleteCard(section, cardId) {
      deleteSectionCard(
        this.$store.state.user.uid,
        this.$route.params.id,
        section,
        cardId
      );
      this.isEditing = !this.isEditing;
    },
    saveCard(section, card) {
      writeSectionCard(
        this.$store.state.user.uid,
        this.$route.params.id,
        section,
        card
      );
      this.isEditing = !this.isEditing;
    },
  },
};
</script>

<style scoped lang="scss">
.card-editing-container {
  cursor: pointer;
}
.editing-form {
  border: 1px solid #8b8b8b;
  border-radius: 8px;
  padding: 1em;
}
.editing-form-bottom {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: right;
  gap: 0.5em;
}
</style>
