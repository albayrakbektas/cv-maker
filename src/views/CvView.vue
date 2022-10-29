<template>
  <div class="main">
    <div class="header">
      <button @click="save">Save</button>
      <button @click="signOut">signout</button>
    </div>
    <div class="body">
      <CardMain />
      <SavedDisplay />
    </div>
  </div>
</template>

<script>
import CardMain from "@/components/card/CardMain";
import { signout, writeUserData } from "@/firebaseMethods";
import { v4 as uuidv4 } from "uuid";
import SavedDisplay from "@/components/display/SavedDisplay";

export default {
  name: "CvView",
  components: { SavedDisplay, CardMain },
  methods: {
    async signOut() {
      await signout();
      await this.$router.push("/login");
    },
    save() {
      let userId = this.$store.state.user.uid;
      let cvId = uuidv4().split("-").join("");
      const {
        personalInformation,
        education,
        employment,
        skills,
        languages,
        reference,
      } = this.$store.state.cvData;
      writeUserData(userId, cvId, {
        id: cvId,
        personalInformation,
        education,
        employment,
        skills,
        languages,
        reference,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.body {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 50px;
}
</style>
