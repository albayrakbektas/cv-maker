<template>
  <div
    class="display-row-card"
    :class="{ modern: $store.state.cvTemplate ?? 'Modern' }"
  >
    <div
      class="row row-two"
      :class="{
        'modern-grid': $store.state.cvTemplate ?? 'Modern',
        'references-modern-grid': section && (section ?? 'references'),
      }"
    >
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
    <div
      :class="{
        'modern-grid': $store.state.cvTemplate ?? 'Modern',
        'references-modern-grid': section && (section ?? 'references'),
      }"
    >
      <div class="empty-div" v-if="$store.state.cvTemplate ?? 'Modern'" />
      <DisplayTwoRows class="dtr" :card="card.rowCard" />
    </div>
  </div>
</template>

<script>
import DisplayTwoRows from "@/components/card/DisplayTwoRows";
export default {
  name: "DisplayRowCard",
  components: { DisplayTwoRows },
  props: {
    card: Object,
    section: String,
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
  line-height: 0.9em;
}
span {
  font-weight: 500;
  display: inline-block;
  overflow: hidden;
}
.card-title {
  filter: brightness(60%);
  padding-bottom: 0.2em;
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
.modern {
  display: grid;
  grid-template-rows: repeat(2, auto);
  .row-two {
    grid-template-areas: "left right";
  }
  .card-title {
    grid-area: right;
  }
  .card-date {
    grid-area: left;
  }
  .modern-grid {
    display: grid;
    grid-template-columns: 2fr 3fr;
    justify-content: space-between;
  }
  .references-modern-grid {
    grid-template-columns: 1fr auto;
    .card-title {
      grid-area: left;
    }
    .card-date {
      grid-area: right;
    }
    .empty-div {
      grid-area: right;
    }
  }
}
</style>
