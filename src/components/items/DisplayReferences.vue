<template>
  <BodyRowCard v-if="getSection.cards" title="Reference">
    <DisplayRowCard
      v-for="(item, index) of getSectionCards"
      :card="item"
      section="references"
      :key="index"
      class="reference-display-row-card"
    />
  </BodyRowCard>
</template>

<script>
import BodyRowCard from "@/components/card/BodyRowCard";
import DisplayRowCard from "@/components/card/DisplayRowCard";
export default {
  name: "DisplayReferences",
  components: { DisplayRowCard, BodyRowCard },
  computed: {
    getSection() {
      return this.$store.getters.getSection("reference");
    },
    getSectionCards() {
      return this.$store.getters.getSectionCards("reference");
    },
  },
};
</script>

<style scoped lang="scss"></style>
