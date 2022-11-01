<template>
  <BodyRowCard v-if="$route.name === 'cv'" title="Languages">
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
  name: "LanguageMain",
  components: { DisplayTwoRows, BodyRowCard },
  computed: {
    getSectionCards() {
      return this.$store.getters.getSectionCards("languages");
    },
  },
};
</script>

<style scoped></style>
