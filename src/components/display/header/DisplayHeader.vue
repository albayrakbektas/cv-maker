<template>
  <div
    v-if="$route.name === 'cv'"
    :style="{ backgroundColor: `${getStyleProperty.value}` }"
    id="display-header"
    class="display-header"
    :class="{ 'zoomed-display-header': getIsZoomed }"
  >
    <h1 class="header-name" :class="{ 'f-xxl-z': getIsZoomed }">
      {{ getPersonalInformationProperties.givenName }}
      {{ getPersonalInformationProperties.familyName }}
    </h1>
    <div class="headline" :class="{ 'f-l-z': getIsZoomed }">
      {{ getPersonalInformationProperties.headline }}
    </div>
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
  computed: {
    getPersonalInformationProperties() {
      return {
        givenName:
          this.$store.getters.getPersonalInformationProperties("givenName"),
        familyName:
          this.$store.getters.getPersonalInformationProperties("familyName"),
        headline:
          this.$store.getters.getPersonalInformationProperties("headline"),
      };
    },
    getStyleProperty() {
      return this.$store.getters.getCvStyleProperty("color");
    },
    getIsZoomed() {
      return this.$store.getters.getIsZoomed;
    },
  },
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
  //background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
  display: grid;
  grid-template-rows: auto auto 1fr;
  align-items: end;
  height: 95px;
  box-sizing: border-box;
  padding: 15px;
}
.zoomed-display-header {
  height: 180px;
  padding: 30px;
}
.header-name {
  line-height: 1;
  font-size: 25px;
  font-weight: normal;
}
.header-bottom {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: start;
  margin-top: 5px;
  gap: 10px;
}
h1,
.f-l {
  margin: 0;
  color: #fff;
  text-align: left;
  margin-block-start: 0;
  margin-block-end: 0;
}
.f-l {
  padding-top: 5px;
  filter: brightness(80%);
}
.headline {
  font-size: 13px;
  color: #ffffff;
  padding-top: 5px;
  filter: brightness(80%);
  text-align: left;
}
</style>
