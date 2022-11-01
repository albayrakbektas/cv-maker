<template>
  <img :src="getPersonalInformationProperties" alt="" />
</template>

<script>
export default {
  name: "HeaderImage",
  data() {
    return {
      file: "",
    };
  },
  computed: {
    getPersonalInformationProperties() {
      return this.$store.getters.getPersonalInformationProperties(
        "profilePicture"
      );
    },
  },
  mounted() {
    this.file =
      this.$store.getters.getPersonalInformationProperties("profilePicture");
  },
};
</script>

<style scoped>
img {
  height: 5.5rem;
  width: 5.5rem;
  object-fit: cover;
}
</style>
