<template>
  <div class="display-header pd">
    <h1 class="header-name">
      {{ $store.state.cvData.personalInformation.givenName }}
      {{ $store.state.cvData.personalInformation.familyName }}
    </h1>
    <h4>{{ $store.state.cvData.personalInformation.headline }}</h4>
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
    "$store.state.cvData.personalInformation.email": function (val) {
      this.anchorList[1].href = "mailto:" + val;
      this.anchorList[1].content = val;
    },
    "$store.state.cvData.personalInformation.phone": function (val) {
      this.anchorList[0].href = "tel:" + val;
      this.anchorList[0].content = val;
    },
    "$store.state.cvData.personalInformation.address": function (val) {
      this.anchorList[2].href =
        "https://www.google.com/maps/place/%C4%B0zmir/data=!4m2!3m1!1s0x14bbd862a762cacd:0x628cbba1a59ce8fe?sa=X&ved=2ahUKEwj9mfm7sIX7AhVxQPEDHTskChkQ8gF6BQiOARAB";
      this.address = val;
    },
    "$store.state.cvData.personalInformation.postCode": function (val) {
      this.anchorList[2].href =
        "https://www.google.com/maps/place/%C4%B0zmir/data=!4m2!3m1!1s0x14bbd862a762cacd:0x628cbba1a59ce8fe?sa=X&ved=2ahUKEwj9mfm7sIX7AhVxQPEDHTskChkQ8gF6BQiOARAB";
      this.postCode = val;
    },
    "$store.state.cvData.personalInformation.city": function (val) {
      this.anchorList[2].href =
        "https://www.google.com/maps/place/%C4%B0zmir/data=!4m2!3m1!1s0x14bbd862a762cacd:0x628cbba1a59ce8fe?sa=X&ved=2ahUKEwj9mfm7sIX7AhVxQPEDHTskChkQ8gF6BQiOARAB";
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
  display: grid;
  grid-template-rows: auto auto 1fr;
  align-items: end;
}
.header-name {
  line-height: 1.1rem;
}
.header-bottom {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  margin-top: 15px;
  gap: 10px;
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
  padding-top: 5px;
  filter: brightness(50%);
}
</style>
