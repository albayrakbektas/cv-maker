<template>
  <img
    v-if="getPersonalInformationProperties"
    :src="getPersonalInformationProperties"
    alt="profile picture"
    :class="{ 'zoomed-img': getZoomedStyle }"
  />
</template>

<script>
export default {
  name: "HeaderImage",
  data() {
    return {};
  },
  computed: {
    getPersonalInformationProperties() {
      return this.$store.getters.getPersonalInformationProperties(
        "profilePicture"
      );
    },
    getZoomedStyle() {
      return this.$store.getters.getZoomedStyle;
    },
  },
};
</script>

<style scoped>
img {
  height: 9.5rem;
  width: 9.5rem;
  object-fit: cover;
}
.zoomed-img {
  height: 180px;
  width: 180px;
}
</style>
