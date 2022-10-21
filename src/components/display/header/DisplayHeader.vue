<template>
  <div class="display-header">
    <h1 class="header-name">
      {{ $store.state.personalInformation.name }}
      {{ $store.state.personalInformation.surname }}
    </h1>
    <h4>{{ $store.state.personalInformation.headline }}</h4>
    <div class="header-bottom">
      <AnchorIcon
        v-for="(item, index) of anchorList"
        :key="item.content + index"
        :anchor="item"
      />
    </div>
  </div>
</template>

<script>
import AnchorIcon from "@/components/button/AnchorIcon";
export default {
  name: "DisplayHeader",
  components: { AnchorIcon },
  watch: {
    "$store.state.personalInformation.mail": function (val) {
      this.anchorList[1].href = "mailto:" + val;
      this.anchorList[1].content = val;
    },
    "$store.state.personalInformation.phone": function (val) {
      this.anchorList[0].href = "tel:" + val;
      this.anchorList[0].content = val;
    },
    "$store.state.personalInformation.address": function (val) {
      this.anchorList[2].href = val;
      this.address = val;
    },
    "$store.state.personalInformation.postCode": function (val) {
      this.anchorList[2].href = val;
      this.postCode = val;
    },
    "$store.state.personalInformation.city": function (val) {
      console.log(val);
      this.anchorList[2].href = val;
      this.city = val;
    },
    anchorList: {
      handler: function () {
        this.anchorList[2].content =
          this.address + ", " + this.postCode + " " + this.city;
      },
      deep: true,
    },
  },
  data() {
    return {
      address: "",
      postCode: "",
      city: "",
      anchorList: [
        {
          href: "",
          iconClass: "fa-solid fa-phone",
          content: "",
        },
        {
          href: "",
          iconClass: "fa-solid fa-envelope",
          content: "",
        },
        {
          href: "",
          iconClass: "fa-solid fa-location-dot",
          content: "",
        },
      ],
      anchorList2: [
        {
          href: "tel:+905050070844",
          iconClass: "fa-solid fa-phone",
          content: "+905050070844",
        },
        {
          href: "",
          iconClass: "fa-solid fa-envelope",
          content: "",
        },
        {
          href: "tel:+905050070844",
          iconClass: "fa-solid fa-location-dot",
          content: "Bornova/Izmir",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.display-header {
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  padding: 15px 30px;
  min-height: 70px;
}
.header-name {
  //white-space: pre-wrap;
}
.header-bottom {
  display: grid;
  grid-template-columns: repeat(3, auto);
}
h1,
h4 {
  margin: 0;
  color: #fff;
  text-align: left;
  margin-block-start: 0;
  margin-block-end: 0;
}
h4 {
  translate: 0 -50%;
  filter: brightness(50%);
}
</style>
