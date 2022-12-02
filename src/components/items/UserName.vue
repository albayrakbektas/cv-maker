<template>
  <div style="text-align: left">
    <SpanIcon
      :icon-style="iconStyle"
      :span-style="iconStyle"
      :button="button"
      :button-style="buttonStyle"
    />
  </div>
</template>

<script>
import SpanIcon from "@/components/button/SpanIcon";
export default {
  name: "UserName",
  components: { SpanIcon },
  mounted() {
    this.button.span = this.getPersonalInformationProperties;
  },
  watch: {
    getPersonalInformationProperties: function (val) {
      this.button.span = val;
    },
  },
  computed: {
    getPersonalInformationProperties() {
      return `${this.$store.getters.getPersonalInformationProperties(
        "givenName"
      )}
        ${this.$store.getters.getPersonalInformationProperties("familyName")}`;
    },
  },
  data() {
    return {
      iconStyle: {
        fontSize: "1rem",
        cursor: "unset",
        color: "#ffffff",
      },
      button: {
        grid: "is",
        iconClass: "fa-solid fa-user",
        span: "Delete",
      },
      buttonStyle: {
        border: "none",
        translate: "0 0 !important",
        padding: "0",
      },
    };
  },
};
</script>

<style scoped lang="scss"></style>
