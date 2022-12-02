<template>
  <div class="user-email">
    <AnchorIcon :anchor="anchor" />
  </div>
</template>

<script>
import AnchorIcon from "@/components/button/AnchorIcon";
export default {
  name: "UserEmail",
  components: { AnchorIcon },
  watch: {
    "$store.state.cvData.personalInformation.email": function (val) {
      this.anchor.href = "mailto:" + val;
      this.anchor.content = val;
    },
  },
  data() {
    return {
      anchor: {
        href: "",
        iconClass: "fa-solid fa-envelope",
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
