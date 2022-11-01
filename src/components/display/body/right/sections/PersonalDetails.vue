<template>
  <BodyRowCard v-if="$route.name === 'cv'" title="Personal Details">
    <DisplayTwoRows
      v-for="(item, index) of getAllPersonalDetail"
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
  computed: {
    getAllPersonalDetail() {
      return this.$store.getters.getAllPersonalDetail;
    },
  },
};
</script>

<style scoped lang="scss"></style>
