<template>
  <div class="display-row-card">
    <div class="row row-two">
      <span
        class="card-title f-m"
        :class="{ 'f-m-z': $store.state.isZoomed }"
        >{{ card.title }}</span
      >
      <span class="card-date f-m" :class="{ 'f-m-z': $store.state.isZoomed }"
        >{{ card.dateStart.month }} {{ card.dateStart.year }}
        {{ card.dateStart.year && card.dateEnd.year ? "-" : "" }}
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
  font-weight: 500;
  display: inline-block;
  overflow: hidden;
}
.card-title {
  filter: brightness(60%);
  padding-bottom: 0.2rem;
}
.card-date {
  font-weight: 500;
}
.display-row-card {
  padding: 0 0 10px 0 !important;
}
.dtr {
  padding-top: 0 !important;
}
</style>
