<template>
  <div class="section">
    <CollapsibleSection title="References">
      <CollapsibleContent
        v-for="(item, index) of $store.state.cvData.reference.cards"
        :key="index"
      >
        <CardEdit :card="item" section="reference" />
        <!--        <form>-->
        <!--          <FormField-->
        <!--            :form-field="positionField"-->
        <!--            v-model="positionField.value"-->
        <!--          />-->
        <!--          <div class="row-two">-->
        <!--            <FormField-->
        <!--              :form-field="employerField"-->
        <!--              v-model="employerField.value"-->
        <!--            />-->
        <!--            <FormField :form-field="cityField" v-model="cityField.value" />-->
        <!--          </div>-->
        <!--          <div class="row-two">-->
        <!--            <div class="row-two">-->
        <!--              <FormField-->
        <!--                :form-field="startMonthField"-->
        <!--                v-model="startMonthField.value"-->
        <!--              />-->
        <!--              <FormField-->
        <!--                :form-field="startYearField"-->
        <!--                v-model="startYearField.value"-->
        <!--              />-->
        <!--            </div>-->
        <!--            <div class="row-two">-->
        <!--              <FormField-->
        <!--                :form-field="endMonthField"-->
        <!--                v-model="endMonthField.value"-->
        <!--              />-->
        <!--              <FormField-->
        <!--                :form-field="endYearField"-->
        <!--                v-model="endYearField.value"-->
        <!--              />-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <FormField-->
        <!--            :form-field="descriptionField"-->
        <!--            v-model="descriptionField.value"-->
        <!--          />-->
        <!--        </form>-->
      </CollapsibleContent>
    </CollapsibleSection>
  </div>
</template>

<script>
import CollapsibleSection from "@/components/collapse/CollapsibleSection";
import CollapsibleContent from "@/components/collapse/CollapsibleContent";
import CardEdit from "@/components/card/CardEditing";
export default {
  name: "ReferenceMain",
  components: { CardEdit, CollapsibleContent, CollapsibleSection },
  mounted() {
    this.positionField.value =
      this.$store.state.cvData.reference.cards.card.title;
  },
  watch: {
    "positionField.value": function (val) {
      this.card.title = val;
      this.$store.state.reference.cards.card = this.card;
    },
    "employerField.value": function (val) {
      this.card.rowCard.subtitle[0] = val;
      this.$store.state.reference.cards.card = this.card;
    },
    "cityField.value": function (val) {
      this.card.rowCard.subtitle[1] = val;
      this.$store.state.reference.cards.card = this.card;
    },
    "descriptionField.value": function (val) {
      this.card.rowCard.content = val;
      this.$store.state.reference.cards.card = this.card;
    },
  },
  data() {
    return {
      card: {
        title: "Maths",
        dateStart: "",
        dateEnd: "",
        rowCard: {
          subtitle: ["", ""],
          content: "Description",
        },
      },
      positionField: {
        tag: "input",
        type: "text",
        name: "position",
        label: "Position",
        placeholder: "",
        value: "",
      },
      employerField: {
        tag: "input",
        type: "text",
        name: "employer",
        label: "Employer",
        placeholder: "",
        value: "",
      },
      cityField: {
        tag: "input",
        type: "text",
        name: "city",
        label: "City",
        placeholder: "",
        value: "",
      },
      startMonthField: {
        tag: "input",
        type: "text",
        name: "startMonth",
        label: "Start Date",
        placeholder: "",
        value: "",
      },
      startYearField: {
        tag: "input",
        type: "text",
        name: "startYear",
        label: "sy",
        placeholder: "",
        value: "",
      },
      endMonthField: {
        tag: "input",
        type: "text",
        name: "endMonth",
        label: "End Date",
        placeholder: "",
        value: "",
      },
      endYearField: {
        tag: "input",
        type: "text",
        name: "endYear",
        label: "ey",
        placeholder: "",
        value: "",
      },
      descriptionField: {
        tag: "textarea",
        type: "text",
        name: "description",
        label: "Description",
        placeholder: "",
        value: "",
      },
    };
  },
};
</script>

<style scoped>
.row-two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
