<template>
  <div v-if="card && (card.content || range)">
    <div v-if="isAnchor(card.subtitle[0])">
      <a
        target="_blank"
        :href="card.content"
        class="display-two-rows f-m"
        :class="{ 'f-m-z': $store.state.isZoomed }"
      >
        <span
          class="card-subtitle f-m"
          :class="{ 'f-m-z': $store.state.isZoomed }"
          >{{ card.subtitle[0]
          }}{{ card.subtitle[1] ? ` - ${card.subtitle[1]}` : "" }}</span
        >
        <!--    <progress v-if="range" :value="Number(range)" max="5"></progress>-->
        <span
          v-if="card.content"
          :class="{ 'f-m-z': $store.state.isZoomed }"
          class="card-content f-m zoomed-app-f"
          >{{ card.content }}</span
        >
      </a>
    </div>
    <div
      v-else
      class="display-two-rows"
      :class="{ 'modern-two-rows': $store.state.cvTemplate === 'Modern' }"
    >
      <span
        class="card-subtitle f-m"
        :class="{ 'f-m-z': $store.state.isZoomed }"
        >{{ card.subtitle[0]
        }}{{ card.subtitle[1] ? ` - ${card.subtitle[1]}` : "" }}</span
      >
      <!--      <progress v-if="range" :value="Number(range)" max="5"></progress>-->
      <LevelDots :range="range" />
      <div
        v-if="$store.state.cvTemplate !== 'Modern' && range"
        class="progress-out"
      >
        <div ref="progress-in" class="progress-in"></div>
      </div>
      <span
        v-if="!range"
        class="card-content f-m zoomed-app-f"
        :class="{ 'f-m-z': $store.state.isZoomed }"
        >{{ card.content }}</span
      >
    </div>
  </div>
</template>

<script>
import LevelDots from "@/components/items/LevelDots";
export default {
  name: "DisplayTwoRows",
  components: { LevelDots },
  props: {
    card: Object,
    range: Number,
  },
  mounted() {
    this.setWidth();
  },
  methods: {
    isAnchor(title) {
      let titles = ["Website", "Linkedin", "Github"];
      if (titles.includes(title)) {
        return true;
      } else {
        return false;
      }
    },
    setWidth() {
      if (this.range) {
        this.$refs["progress-in"].style.width = `${20 * this.$props.range}%`;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.progress-out {
  width: 100%;
  height: 5px;
  margin: 5px 0;
  background-color: #8b8b8b;
}
.progress-in {
  height: 5px;
  background-color: #2d2d3a;
}
a {
  text-decoration: none;
  color: unset;
  .card-subtitle {
    cursor: default;
  }
  .card-content {
    cursor: pointer;
  }
}
.display-two-rows {
  display: grid;
  text-align: left;
  line-height: 0.9em;
  align-items: center;
  padding: 1px 0;
}
span {
  font-weight: 500;
}
.card-subtitle {
  padding-bottom: 0.2em;
  color: #8c8c8e;
}
.card-content {
  filter: brightness(60%);
  display: inline-block;
  overflow: hidden;
  word-wrap: break-word;
}
progress {
  accent-color: #2b2b35;
}
::-webkit-progress-bar {
  background-color: #8b8b8b;
}
.modern-two-rows {
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: space-between;
}
</style>
