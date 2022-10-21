<template>
  <BodyRowCard title="Skills">
    <DisplayTwoRows
      v-for="(item, index) of detailsList"
      :key="index"
      :card="item"
      :range="item.content"
    />
  </BodyRowCard>
</template>

<script>
import DisplayTwoRows from "@/components/card/DisplayTwoRows";
import BodyRowCard from "@/components/card/BodyRowCard";

export default {
  name: "SkillMain",
  components: { DisplayTwoRows, BodyRowCard },
  watch: {
    "$store.state.skills": {
      // function(val) {
      //   console.log(val);
      //   //
      // },
      handler: function (val) {
        console.log(val);
        this.detailsList = this.$store.state.skills;
      },
      deep: true,
    },
  },
  mounted() {
    this.detailsList = this.$store.state.skills;
  },
  data() {
    return {
      detailsList: [],
    };
  },
};
</script>

<style scoped></style>
