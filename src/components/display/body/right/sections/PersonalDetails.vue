<template>
  <BodyRowCard
    v-if="$route.name === 'cv' && isTitle"
    :title="isTitle ? 'Personal Details' : ''"
  >
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
  watch: {
    getAllPersonalDetail: {
      handler: function () {
        this.isNull();
      },
      deep: true,
    },
  },
  data() {
    return {
      isTitle: false,
    };
  },
  methods: {
    isNull() {
      for (const [key, value] of Object.entries(this.getAllPersonalDetail)) {
        console.log(`k:${key}-`, `val:${value.content}`);
        if (value.content && value.content !== "") {
          this.isTitle = true;
        }
      }
    },
  },
  mounted() {
    this.isNull();
  },
};
</script>

<style scoped lang="scss"></style>
