<template>
  <BodyRowCard
    v-if="getSectionCards('skills')"
    :title="getSectionCards.title ? 'Skills' : ''"
  >
    <DisplayTwoRows
      v-for="(item, index) of getSectionCards"
      :key="index"
      :card="item"
      :range="Number(item.content)"
    />
  </BodyRowCard>
</template>

<script>
import DisplayTwoRows from "@/components/card/DisplayTwoRows";
import BodyRowCard from "@/components/card/BodyRowCard";

export default {
  name: "SkillMain",
  components: { DisplayTwoRows, BodyRowCard },
  computed: {
    getSectionCards() {
      return (section) =>
        this.$store.getters.getSectionCards(section || "skills");
    },
  },
  mounted() {
    this.data = this.$store.getters.getSectionCards("skills");
  },
  data() {
    return {
      data: null,
    };
  },
};
</script>

<style scoped></style>
