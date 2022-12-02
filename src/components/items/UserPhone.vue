<template>
  <div>
    <AnchorIcon :anchor="anchor" />
  </div>
</template>

<script>
import AnchorIcon from "@/components/button/AnchorIcon";
export default {
  name: "UserPhone",
  components: { AnchorIcon },
  computed: {
    getUserPhone() {
      return this.$store.getters.getPersonalInformationProperties("phone");
    },
  },
  watch: {
    getUserPhone: function (val) {
      this.anchor.href = "tel:" + val;
      this.anchor.content = val;
    },
  },
  data() {
    return {
      anchor: {
        href: "",
        iconClass: "fa-solid fa-phone",
        content: "",
        style: {
          fontSize: "1rem",
        },
        iconStyle: {
          fontSize: "1rem",
        },
      },
    };
  },
};
</script>

<style scoped></style>
