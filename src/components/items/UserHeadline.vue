<template>
  <div class="user-headline">
    <h3>{{ getPersonalInformationProperties }}</h3>
  </div>
</template>

<script>
export default {
  name: "UserHeadline",
  computed: {
    getPersonalInformationProperties() {
      return this.$store.getters.getPersonalInformationProperties("headline");
    },
  },
};
</script>

<style scoped lang="scss"></style>
