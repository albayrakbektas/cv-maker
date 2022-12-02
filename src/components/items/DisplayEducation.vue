<template>
  <BodyRowCard
    v-if="getSectionCards('education')"
    :title="getSection.education.title || 'Education'"
  >
    <DisplayRowCard
      v-for="(item, index) of getSectionCards('education')"
      :card="item"
      :key="index"
    />
  </BodyRowCard>
</template>

<script>
import BodyRowCard from "@/components/card/BodyRowCard";
import DisplayRowCard from "@/components/card/DisplayRowCard";
export default {
  name: "DisplayEducation",
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
