<template>
  <div @click="$emit('event-handler')" class="card-container">
    <div class="card-left">
      <div class="card-title">
        <span v-if="card">{{ card.title }}</span>
      </div>
      <div class="card-row">
        <span v-if="card && card.rowCard && card.rowCard.subtitle[0]"
          >{{ card.rowCard.subtitle[0] }},
        </span>
        <p v-if="card && card.subtitle">{{ card.subtitle[0] }}</p>
        <p v-if="card && card.content">{{ valueToText(card.content) }}</p>
        <span v-if="card && card.rowCard && card.rowCard.subtitle[1]">{{
          card.rowCard.subtitle[1]
        }}</span>
      </div>
    </div>
    <div class="card-right">
      <i class="fa-solid fa-pen"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardShortcut",
  props: {
    card: Object,
  },
  methods: {
    valueToText(val) {
      let degree = "";
      switch (Number(val)) {
        case 0:
          degree = "Choose one";
          break;
        case 1:
          degree = "Beginner";
          break;
        case 2:
          degree = "Moderate";
          break;
        case 3:
          degree = "Good";
          break;
        case 4:
          degree = "Very Good";
          break;
        case 5:
          degree = "Fluent";
      }
      return degree;
    },
  },
};
</script>

<style scoped lang="scss">
* {
  text-align: left;
  margin: 0;
}
.card-container {
  width: auto;
  border: 1px solid #8b8b8b;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}
.card-right {
  padding: 10px;
  display: grid;
  align-items: center;
  justify-content: center;
  border: 1px solid #8b8b8b;
  border-radius: 8px;
}
</style>
