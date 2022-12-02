<template>
  <div>
    <AnchorIcon
      v-for="(item, index) of getAllPersonalDetail"
      :key="index"
      :anchor="item"
    />
  </div>
</template>

<script>
import AnchorIcon from "@/components/button/AnchorIcon";
export default {
  name: "UserLinkAddress",
  components: { AnchorIcon },
  mounted() {
    console.log(this.getAllPersonalDetail);
  },
  computed: {
    getAllPersonalDetail() {
      return this.$store.getters.getAllPersonalDetail;
    },
  },
  watch: {
    getAllPersonalDetail: {
      handler: function (val) {
        console.log(val);
      },
      deep: true,
    },
  },
  data() {
    return {
      anchorList: [
        {
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
        {
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
        {
          href: "",
          iconClass: "fa-solid fa-location-dot",
          content: "",
          style: {
            fontSize: "1rem",
          },
          iconStyle: {
            fontSize: "1rem",
          },
        },
      ],
    };
  },
};
</script>

<style scoped></style>
