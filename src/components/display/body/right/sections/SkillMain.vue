<template>
  <BodyRowCard title="Skills">
    <DisplayTwoRows
      v-for="(item, index) of detailsList"
      :key="index"
      :card="item"
      :range="Number(item.content)"
    />
  </BodyRowCard>
</template>

<script>
import DisplayTwoRows from "@/components/card/DisplayTwoRows";
import BodyRowCard from "@/components/card/BodyRowCard";
import { getCv } from "@/firebaseMethods";

export default {
  name: "SkillMain",
  components: { DisplayTwoRows, BodyRowCard },
  watch: {
    "$store.state.isChanging": {
      handler: function (val) {
        console.log(val);
        this.detailsList = this.$store.state.cvData.skills;
      },
      deep: true,
    },
  },
  async mounted() {
    getCv(this.$store.state.user.uid, this.$route.params.id).then((res) => {
      this.detailsList = res.skills;
    });
  },
  data() {
    return {
      detailsList: [],
    };
  },
};
</script>

<style scoped></style>
