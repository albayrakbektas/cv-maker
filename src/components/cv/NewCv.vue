<template>
  <div @click.prevent="createNewCv">
    <div class="new-cv-container">
      <h3 class="f-xl">Create new Cv</h3>
      <i class="fa-solid fa-plus f-xl"></i>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import { getCv, writeUserData } from "@/firebaseMethods";
export default {
  name: "NewCv",
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    createUid() {
      return uuidv4().split("-").join("");
    },
    async createNewCv() {
      let cvId = this.createUid();
      let newCv = this.$store.state.cv;
      newCv.id = cvId;
      await writeUserData(this.getUser.uid, cvId, newCv);
      await getCv(this.getUser.uid, cvId);
      await this.$router.push("cv/" + cvId);
    },
  },
};
</script>

<style scoped lang="scss">
.new-cv-container {
  border: 1px dashed #2b2b35;
  height: 34rem;
  width: 24rem;
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
  transition: all 0.4s ease-in-out;
  &:hover {
    border: 1px dashed #800080;
    * {
      color: #800080;
    }
  }
}
h3,
i {
  color: #2b2b35;
  font-size: 2rem;
  transition: all 0.4s ease-in-out;
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
