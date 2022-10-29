<template>
  <BodyRowCard title="Personal Details">
    <DisplayTwoRows
      v-for="(item, index) of detailsList"
      :key="index"
      :card="item"
    />
  </BodyRowCard>
</template>

<script>
import BodyRowCard from "@/components/card/BodyRowCard";
import DisplayTwoRows from "@/components/card/DisplayTwoRows";
export default {
  name: "PersonalDetails",
  components: { DisplayTwoRows, BodyRowCard },
  watch: {
    "$store.state.cvData.personalInformation.personalDetail": function () {
      this.detailsList =
        this.$store.state.cvData.personalInformation.personalDetail;
    },
  },
  mounted() {
    this.detailsList =
      this.$store.state.cvData.personalInformation.personalDetail;
  },
  data() {
    return {
      detailsList: [],
    };
  },
};
</script>

<style scoped lang="scss"></style>
