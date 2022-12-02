<template>
  <BodyRowCard
    v-if="getSectionCards('employment')"
    :title="getSection.employment.title || 'Employment'"
  >
    <DisplayRowCard
      v-for="(item, index) of getSectionCards('employment')"
      :card="item"
      :key="index"
    />
  </BodyRowCard>
</template>

<script>
import BodyRowCard from "@/components/card/BodyRowCard";
import DisplayRowCard from "@/components/card/DisplayRowCard";
export default {
  name: "DisplayEmployment",
  components: { DisplayRowCard, BodyRowCard },
  computed: {
    getSection() {
      return {
        education: this.$store.getters.getSection("education"),
        employment: this.$store.getters.getSection("employment"),
      };
    },
    getSectionCards() {
      return (section) =>
        this.$store.getters.getSectionCards(section || "education");
    },
  },
};
</script>

<style scoped></style>
