<template>
  <BodyRowCard title="Languages">
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
  name: "LanguageMain",
  components: { DisplayTwoRows, BodyRowCard },
  watch: {
    // "$store.state.languages": function () {
    //   this.detailsList = this.$store.state.languages;
    // },
    "$store.state.languages": {
      // function(val) {
      //   console.log(val);
      //   //
      // },
      handler: function (val) {
        console.log(val);
        this.detailsList = this.$store.state.languages;
      },
      deep: true,
    },
  },
  mounted() {
    this.detailsList = this.$store.state.languages;
  },
  data() {
    return {
      detailsList: [],
    };
  },
};
</script>

<style scoped></style>
