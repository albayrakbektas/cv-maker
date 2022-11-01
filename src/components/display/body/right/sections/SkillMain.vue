<template>
  <BodyRowCard v-if="data" title="Skills">
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
      return this.$store.getters.getSectionCards("skills");
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
