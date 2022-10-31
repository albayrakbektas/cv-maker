<template>
  <img :src="$store.state.cvData.personalInformation.profilePicture" alt="" />
</template>

<script>
export default {
  name: "HeaderImage",
  data() {
    return {
      file: "",
    };
  },
  watch: {
    // "$store.state.cvData.personalInformation.profilePicture": function (val) {
    //   this.displayImage(val);
    // },
  },
  methods: {
    displayImage(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        console.log(reader.result);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    },
  },
};
</script>

<style scoped>
img {
  height: 131px;
  object-fit: cover;
}
</style>
