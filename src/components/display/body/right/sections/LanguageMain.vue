<template>
  <BodyRowCard
    v-if="$route.name === 'cv' && getSection.cards"
    title="Languages"
  >
    <DisplayTwoRows
      v-for="(item, index) of getSection.cards"
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
  name: "LanguageMain",
  components: { DisplayTwoRows, BodyRowCard },
  computed: {
    getSection() {
      return this.$store.getters.getSection("languages");
    },
  },
};
</script>

<style scoped></style>
