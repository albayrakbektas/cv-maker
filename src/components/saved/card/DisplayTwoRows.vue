<template>
  <div>
    <div v-if="isAnchor(card.subtitle[0])">
      <a target="_blank" :href="card.content" class="display-two-rows">
        <span class="card-subtitle"
          >{{ card.subtitle[0]
          }}{{ card.subtitle[1] ? `- ${card.subtitle[1]}` : "" }}</span
        >
        <!--    <progress v-if="range" :value="Number(range)" max="5"></progress>-->
        <span v-if="card.content" class="card-content">{{ card.content }}</span>
      </a>
    </div>
    <div v-else class="display-two-rows">
      <span class="card-subtitle"
        >{{ card.subtitle[0]
        }}{{ card.subtitle[1] ? `- ${card.subtitle[1]}` : "" }}</span
      >
      <progress v-if="range" :value="Number(range)" max="5"></progress>
      <!--      <span v-if="card.content" class="card-content">{{ card.content }}</span>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "DisplayTwoRows",
  props: {
    card: Object,
    range: Number,
  },
  methods: {
    isAnchor(title) {
      let titles = ["Website", "LinkedIn", "Github"];
      if (titles.includes(title)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
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
  line-height: 0.9rem;
  align-items: center;
  padding: 5px 0;
}
span {
  font-size: 0.7rem;
  font-weight: 600;
}
.card-subtitle {
  font-size: 0.6rem;
  color: #8c8c8e;
}
.card-content {
  filter: brightness(60%);
  font-size: 0.6rem;
}
progress {
  accent-color: #2b2b35;
}
::-webkit-progress-bar {
  background-color: #8b8b8b;
}
</style>
