<template>
  <BodyRowCard
    :hr-style="hrStyle"
    title-style="c-white"
    v-if="$route.name === 'cv' && getSection.cards"
    title="Skills"
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
  name: "SkillMain",
  components: { DisplayTwoRows, BodyRowCard },
  computed: {
    getSection() {
      return this.$store.getters.getSection("skills");
    },
  },
  mounted() {
    this.data = this.$store.getters.getSectionCards("skills");
  },
  data() {
    return {
      data: null,
      titleStyle: "c-white",
      hrStyle: {
        backgroundColor: "#ffffff !important",
        height: "1px",
      },
    };
  },
};
</script>

<style scoped lang="scss"></style>
