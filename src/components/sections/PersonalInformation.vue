<template>
  <div ref="section" class="section">
    <CollapsibleSection title="Personal Information">
      <CollapsibleContent>
        <form>
          <div class="row">
            <div class="photo-input">
              <div class="photo-header">
                <label class="f-il" for="photo">Photo</label>
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
                  <label class="f-il" for="givenName">Given Name</label>
                  <input name="givenName" v-model="givenName" />
                </div>
                <div class="input-container">
                  <label class="f-il" for="familyName">Family Name</label>
                  <input name="familyName" v-model="familyName" />
                </div>
              </div>
              <div class="input-container">
                <label class="f-il" for="email">Email Address</label>
                <input name="email" v-model="email" />
              </div>
            </div>
          </div>
          <div class="input-container">
            <label class="f-il" for="headline">Headline</label>
            <input name="headline" v-model="headline" />
          </div>
          <div class="input-container">
            <label class="f-il" for="phone">Phone number</label>
            <input name="phone" v-model="phone" />
          </div>
          <div class="input-container">
            <label class="f-il" for="address">Address</label>
            <input name="address" v-model="address" />
          </div>
          <div class="two-columns">
            <div class="input-container">
              <label class="f-il" for="postCode">Post code</label>
              <input name="postCode" v-model="postCode" />
            </div>
            <div class="input-container">
              <label class="f-il" for="city">City</label>
              <input name="city" v-model="city" />
            </div>
          </div>
          <div class="input-container">
            <label class="f-il" for="website">Website</label>
            <input name="website" v-model="website" />
          </div>
          <div class="input-container">
            <label class="f-il" for="linkedin">Linkedin</label>
            <input name="linkedin" v-model="linkedin" />
          </div>
          <div class="input-container">
            <label class="f-il" for="github">Github</label>
            <input name="github" v-model="github" />
          </div>
        </form>
        <div
          v-for="(item, index) of customFieldList"
          :key="item.content + index"
        >
          <CustomField v-model="item.content" :custom-field="item" />
        </div>
        <AddFieldButton :button="newFieldButton" />
        <SpanIcon
          :icon-style="spanStyle"
          :span-style="spanStyle"
          :button-style="saveButtonStyle"
          @button-handler="
            saveCard('personalInformation', {
              profilePicture:
                $store.state.cvData.personalInformation.profilePicture,
              givenName,
              familyName,
              email,
              headline,
              phone,
              address,
              postCode,
              city,
              personalDetail: {
                Website: { content: website, subtitle: ['Website', ''] },
                Github: { content: github, subtitle: ['Github', ''] },
                Linkedin: { content: linkedin, subtitle: ['Linkedin', ''] },
              },
            })
          "
          :button="saveButton"
        />
      </CollapsibleContent>
    </CollapsibleSection>
  </div>
</template>

<script>
import CollapsibleContent from "@/components/collapse/CollapsibleContent";
import CollapsibleSection from "@/components/collapse/CollapsibleSection";
import ProfileUpload from "@/components/display/header/ProfileUpload";
import { getCustomFields, writePersonalInformation } from "@/firebaseMethods";
import SpanIcon from "@/components/button/SpanIcon";
import CustomField from "@/components/CustomField";
import AddFieldButton from "@/components/items/AddFieldButton";

export default {
  name: "PersonalInformation",
  components: {
    AddFieldButton,
    CustomField,
    SpanIcon,
    ProfileUpload,
    CollapsibleContent,
    CollapsibleSection,
  },
  async mounted() {
    await this.getCustomFields();
  },
  computed: {
    customFields() {
      return getCustomFields(this.$store.state.user.uid, this.$route.params.id);
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
  },
  methods: {
    edit() {
      this.isEditing = !this.isEditing;
    },
    async getCustomFields() {
      this.customFieldList = await getCustomFields(
        this.$store.state.user.uid,
        this.$route.params.id
      );
    },
    async saveCard(section, card) {
      console.log(this.$store.state.cvData);
      await writePersonalInformation(
        this.$store.state.user.uid,
        this.$route.params.id,
        section,
        card
      );
    },
  },
  data() {
    return {
      customFieldList: [],
      newFieldButton: {
        iconClass: "fa-solid fa-plus",
        span: "Custom Field",
      },
      customField: {
        name: "customField",
        value: "",
      },
      isEditing: false,
      isSlotActive: false,
      saveButton: { iconClass: "fa-solid fa-save", grid: "is", span: "Save" },
      spanStyle: {
        color: "#ffffff",
        fontWeight: "900",
        fontSize: "1.5em",
      },
      saveButtonStyle: {
        backgroundColor: "rgba(0, 0, 0, 1)",
        backgroundImage:
          "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.3))",
        // height: "45px",
        marginTop: "10px",
        float: "right",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.section {
  //overflow: scroll;
}
.row {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
.two-rows {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}
.two-columns {
  display: grid;
  gap: 0.5em;
  grid-template-columns: repeat(2, 1fr);
}
.photo-input {
  display: grid;
  grid-template-rows: auto 1fr;
  text-align: left;
  margin-right: 1em;
  padding: 0.5em 0;
  input {
    border-radius: 8px;
  }
}
.photo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
i {
  cursor: pointer;
}
form {
  text-align: left;
}
input {
}
label {
  display: inline-block;
  margin-bottom: 0.25em;
}
.row-two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5em;
}
.input-container {
  display: grid;
  margin: 0.5em 0;
}
</style>
