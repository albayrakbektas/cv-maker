<template>
  <div class="display-row-card">
    <div class="row row-two">
      <span class="card-title">{{ card.title }}</span>
      <span class="card-date"
        >{{ card.dateStart.month }} {{ card.dateStart.year }} -
        {{ card.dateEnd.month }} {{ card.dateEnd.year }}</span
      >
    </div>
    <DisplayTwoRows class="dtr" :card="card.rowCard" />
  </div>
</template>

<script>
import DisplayTwoRows from "@/components/card/DisplayTwoRows";
export default {
  name: "DisplayRowCard",
  components: { DisplayTwoRows },
  props: {
    card: Object,
  },
};
</script>

<style scoped lang="scss">
.row-two {
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  line-height: 0.9rem;
}
span {
  font-size: 0.8rem;
  font-weight: 600;
}
.card-title {
  filter: brightness(60%);
  font-size: 0.7rem;
}
.card-date {
  font-weight: 500;
  font-size: 0.6rem;
}
.display-row-card {
  padding: 0 0 10px 0 !important;
}
.dtr {
  padding-top: 0 !important;
}
</style>
