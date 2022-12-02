<template>
  <img
    v-if="getPersonalInformationProperties"
    :src="getPersonalInformationProperties"
    alt="profile picture"
    :class="{
      'zoomed-img': getZoomedStyle,
      modern: $store.state.cvTemplate ?? 'Modern',
    }"
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
  height: 95px;
  width: 95px;
  object-fit: cover;
}
.zoomed-img {
  height: 180px;
  width: 180px;
}
.modern {
  border-radius: 50%;
  object-fit: fill;
  justify-self: center;
}
</style>
