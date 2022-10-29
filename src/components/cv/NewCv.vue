<template>
  <router-link :to="'/cv/' + createUid()">
    <div class="new-cv-container">
      <h3>Create new Cv</h3>
      <i class="fa-solid fa-plus"></i>
    </div>
  </router-link>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  name: "NewCv",
  methods: {
    createUid() {
      return uuidv4().split("-").join("");
    },
  },
};
</script>

<style scoped lang="scss">
.new-cv-container {
  border: 1px dashed #2b2b35;
  height: 40vh;
  width: 15vw;
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
}
h3 {
  align-self: end;
}
i {
  align-self: start;
}
</style>
