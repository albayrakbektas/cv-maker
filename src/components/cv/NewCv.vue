<template>
  <div @click="createNewCv">
    <div class="new-cv-container">
      <h3 class="f-xl">Create new Cv</h3>
      <i class="fa-solid fa-plus f-xl"></i>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { writeUserData } from "@/firebaseMethods";
export default {
  name: "NewCv",
  methods: {
    createUid() {
      return uuidv4().split("-").join("");
    },
    createNewCv() {
      let cvId = this.createUid();
      let newCv = this.$store.state.cv;
      newCv.id = cvId;
      writeUserData(this.$store.state.user.uid, cvId, newCv);
      this.$router.push("cv/" + cvId);
    },
  },
};
</script>

<style scoped lang="scss">
.new-cv-container {
  border: 1px dashed #2b2b35;
  height: 21rem;
  width: 14rem;
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
div {
  cursor: pointer;
}
</style>
