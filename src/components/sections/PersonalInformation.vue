<template>
  <div ref="section" class="section">
    <CollapsibleSection title="Personal Information">
      <CollapsibleContent>
        <form>
          <div class="row">
            <div class="photo-input">
              <div class="photo-header">
                <label for="photo">Photo</label>
                <i @click="edit" class="fa-solid fa-ellipsis-vertical"></i>
              </div>
              <input
                v-if="isSlotActive"
                name="photo"
                v-model="profilePicture"
              />
              <ProfileUpload :is-editing="isEditing" v-else />
            </div>
            <div class="two-rows">
              <div class="two-columns">
                <div class="input-container">
                  <label for="givenName">Given Name</label>
                  <input name="givenName" v-model="givenName" />
                </div>
                <div class="input-container">
                  <label for="familyName">Family Name</label>
                  <input name="familyName" v-model="familyName" />
                </div>
              </div>
              <div class="input-container">
                <label for="email">Email Address</label>
                <input name="email" v-model="email" />
              </div>
            </div>
          </div>
          <div class="input-container">
            <label for="headline">Headline</label>
            <input name="headline" v-model="headline" />
          </div>
          <div class="input-container">
            <label for="phone">Phone number</label>
            <input name="phone" v-model="phone" />
          </div>
          <div class="input-container">
            <label for="address">Address</label>
            <input name="address" v-model="address" />
          </div>
          <div class="input-container">
            <label for="postCode">Post code</label>
            <input name="postCode" v-model="postCode" />
            <div class="input-container">
              <label for="city">City</label>
              <input name="city" v-model="city" />
            </div>
          </div>
          <div class="input-container">
            <label for="website">Website</label>
            <input name="website" v-model="website" />
          </div>
          <div class="input-container">
            <label for="linkedin">Linkedin</label>
            <input name="linkedin" v-model="linkedin" />
          </div>
          <div class="input-container">
            <label for="github">Github</label>
            <input name="github" v-model="github" />
          </div>
        </form>
      </CollapsibleContent>
    </CollapsibleSection>
  </div>
</template>

<script>
import CollapsibleContent from "@/components/collapse/CollapsibleContent";
import CollapsibleSection from "@/components/collapse/CollapsibleSection";
import ProfileUpload from "@/components/display/header/ProfileUpload";

export default {
  name: "PersonalInformation",
  components: {
    ProfileUpload,
    CollapsibleContent,
    CollapsibleSection,
  },
  computed: {
    website: {
      get() {
        return this.$store.getters.getPersonalInformationPersonalDetail(
          "Website"
        );
      },
      set(value) {
        this.$store.commit("setPersonalDetails", { title: "Website", value });
      },
    },
    linkedin: {
      get() {
        return this.$store.getters.getPersonalInformationPersonalDetail(
          "Linkedin"
        );
      },
      set(value) {
        this.$store.commit("setPersonalDetails", { title: "Linkedin", value });
      },
    },
    github: {
      get() {
        return this.$store.getters.getPersonalInformationPersonalDetail(
          "Github"
        );
      },
      set(value) {
        this.$store.commit("setPersonalDetails", { title: "Github", value });
      },
    },
    profilePicture: {
      get() {
        return this.$store.state.cvData.personalInformation.profilePicture;
      },
      set(value) {
        this.$store.commit("setPersonalInformationProperties", {
          property: "profilePicture",
          value,
        });
      },
    },
    givenName: {
      get() {
        return this.$store.state.cvData.personalInformation.givenName;
      },
      set(value) {
        this.$store.commit("setPersonalInformationProperties", {
          property: "givenName",
          value,
        });
      },
    },
    familyName: {
      get() {
        return this.$store.state.cvData.personalInformation.familyName;
      },
      set(value) {
        this.$store.commit("setPersonalInformationProperties", {
          property: "familyName",
          value,
        });
      },
    },
    email: {
      get() {
        return this.$store.state.cvData.personalInformation.email;
      },
      set(value) {
        this.$store.commit("setPersonalInformationProperties", {
          property: "email",
          value,
        });
      },
    },
    headline: {
      get() {
        return this.$store.state.cvData.personalInformation.headline;
      },
      set(value) {
        this.$store.commit("setPersonalInformationProperties", {
          property: "headline",
          value,
        });
      },
    },
    phone: {
      get() {
        return this.$store.state.cvData.personalInformation.phone;
      },
      set(value) {
        this.$store.commit("setPersonalInformationProperties", {
          property: "phone",
          value,
        });
      },
    },
    address: {
      get() {
        return this.$store.state.cvData.personalInformation.address;
      },
      set(value) {
        this.$store.commit("setPersonalInformationProperties", {
          property: "address",
          value,
        });
      },
    },
    postCode: {
      get() {
        return this.$store.state.cvData.personalInformation.postCode;
      },
      set(value) {
        this.$store.commit("setPersonalInformationProperties", {
          property: "postCode",
          value,
        });
      },
    },
    city: {
      get() {
        return this.$store.state.cvData.personalInformation.city;
      },
      set(value) {
        this.$store.commit("setPersonalInformationProperties", {
          property: "city",
          value,
        });
      },
    },
    // website: {
    //   get() {
    //     return this.$store.state.cvData.personalInformation.personalDetail.find(
    //       (x) => {
    //         x.subtitle.includes("Website");
    //       }
    //     );
    //   },
    //   set(value) {
    //     this.$store.commit("setPersonalInformationProperties", {
    //       property: "city",
    //       value,
    //     });
    //   },
    // },
    getPersonalInformationProperties(property) {
      return this.$store.getters.getPersonalInformationProperties(property);
    },
  },
  methods: {
    edit() {
      this.isEditing = !this.isEditing;
    },
  },
  // async mounted() {
  //   getCv(this.$store.state.user.uid, this.$route.params.id).catch((err) => {
  //     console.log(err);
  //   });
  // },
  watch: {
    // "personalInformation.givenName": function (val) {
    //   console.log(val);
    //   this.$store.state.cvData.personalInformation.givenName = val;
    // },
    // familyName: function (val) {
    //   this.$store.state.cvData.personalInformation.familyName = val;
    // },
    // email: function (val) {
    //   this.$store.state.cvData.personalInformation.email = val;
    // },
    // headline: function (val) {
    //   this.$store.state.cvData.personalInformation.headline = val;
    // },
    // phone: function (val) {
    //   this.$store.state.cvData.personalInformation.phone = val;
    // },
    // address: function (val) {
    //   this.$store.state.cvData.personalInformation.address = val;
    // },
    // postCode: function (val) {
    //   this.$store.state.cvData.personalInformation.postCode = val;
    // },
    // city: function (val) {
    //   this.$store.state.cvData.personalInformation.city = val;
    // },
    // website: function (val) {
    //   let data =
    //     this.$store.state.cvData.personalInformation.personalDetail.find((x) =>
    //       x.subtitle.includes("Website")
    //     );
    //   data.content = val;
    // },
    // linkedin: function (val) {
    //   let data =
    //     this.$store.state.cvData.personalInformation.personalDetail.find((x) =>
    //       x.subtitle.includes("LinkedIn")
    //     );
    //   data.content = val;
    // },
    // github: function (val) {
    //   let data =
    //     this.$store.state.cvData.personalInformation.personalDetail.find((x) =>
    //       x.subtitle.includes("Github")
    //     );
    //   data.content = val;
    // },
  },
  data() {
    return {
      isEditing: false,
      // personalInformation: {
      //   profilePicture: "",
      //   name: "",
      //   surname: "",
      //   mail: "",
      //   headline: "",
      //   phone: "",
      //   address: "",
      //   postCode: "",
      //   city: "",
      //   website: "",
      //   linkedIn: "",
      //   personalDetail: {
      //     website: "website",
      //     linkedin: "linkedin",
      //     github: "github",
      //   },
      // },
      isSlotActive: false,
    };
  },
};
</script>

<style scoped lang="scss">
.section {
  overflow: scroll;
}
.row {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
.two-rows {
  display: grid;
  gap: 0.5rem;
  grid-template-rows: repeat(2, 1fr);
}
.two-columns {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
}
.photo-header {
  display: flex;
  justify-content: space-between;
}
.photo-input {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 182px;
  text-align: left;
  input {
    border-radius: 8px;
  }
}
i {
  cursor: pointer;
}
form {
  text-align: left;
}
input {
  padding: 0.5rem;
}
label {
  display: inline-block;
}
.row-two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}
.input-container {
  display: grid;
  margin: 0.5rem 0;
}
</style>