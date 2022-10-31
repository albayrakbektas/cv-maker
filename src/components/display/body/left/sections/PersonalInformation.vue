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
                v-model="$store.state.cvData.personalInformation.profilePicture"
              />
              <ProfileUpload :is-editing="isEditing" v-else />
            </div>
            <div class="two-rows">
              <div class="two-columns">
                <div class="input-container">
                  <label for="givenName">Given Name</label>
                  <input
                    name="givenName"
                    v-model="$store.state.cvData.personalInformation.givenName"
                  />
                </div>
                <div class="input-container">
                  <label for="familyName">Family Name</label>
                  <input
                    name="familyName"
                    v-model="$store.state.cvData.personalInformation.familyName"
                  />
                </div>
              </div>
              <div class="input-container">
                <label for="email">Email Address</label>
                <input
                  name="email"
                  v-model="$store.state.cvData.personalInformation.email"
                />
              </div>
            </div>
          </div>
          <div class="input-container">
            <label for="headline">Headline</label>
            <input
              name="headline"
              v-model="$store.state.cvData.personalInformation.headline"
            />
          </div>
          <div class="input-container">
            <label for="phone">Phone number</label>
            <input
              name="phone"
              v-model="$store.state.cvData.personalInformation.phone"
            />
          </div>
          <div class="input-container">
            <label for="address">Address</label>
            <input
              name="address"
              v-model="$store.state.cvData.personalInformation.address"
            />
          </div>
          <div class="input-container">
            <label for="postCode">Post code</label>
            <input
              name="postCode"
              v-model="$store.state.cvData.personalInformation.postCode"
            />
            <div class="input-container">
              <label for="city">City</label>
              <input
                name="city"
                v-model="$store.state.cvData.personalInformation.city"
              />
            </div>
          </div>
          <div class="input-container">
            <label for="website">Website</label>
            <input
              name="website"
              v-model="
                $store.state.cvData.personalInformation.personalDetail[0]
                  .content
              "
            />
          </div>
          <div class="input-container">
            <label for="linkedin">Linkedin</label>
            <input
              name="linkedin"
              v-model="
                $store.state.cvData.personalInformation.personalDetail[1]
                  .content
              "
            />
          </div>
          <div class="input-container">
            <label for="github">Github</label>
            <input
              name="github"
              v-model="
                $store.state.cvData.personalInformation.personalDetail[2]
                  .content
              "
            />
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
import { getCv } from "@/firebaseMethods";

export default {
  name: "PersonalInformation",
  components: {
    ProfileUpload,
    CollapsibleContent,
    CollapsibleSection,
  },
  methods: {
    edit() {
      this.isEditing = !this.isEditing;
    },
  },
  async mounted() {
    getCv(this.$store.state.user.uid, this.$route.params.id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
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
      personalInformation: {
        profilePicture: "",
        name: "",
        surname: "",
        mail: "",
        headline: "",
        phone: "",
        address: "",
        postCode: "",
        city: "",
        website: "",
        linkedIn: "",
        personalDetail: {
          website: "website",
          linkedin: "linkedin",
          github: "github",
        },
      },
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
  /*width: 100%;*/
  /*width: -moz-available;*/
  /*width: -webkit-fill-available;*/
  /*width: fill-available;*/
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
