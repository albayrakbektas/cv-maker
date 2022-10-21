<template>
  <div ref="section" class="section">
    <CollapsibleSection title="Personal Information">
      <CollapsibleContent>
        <form>
          <div class="row">
            <div class="photo-input">
              <label for="photo">Photo</label>
              <input
                v-if="isSlotActive"
                name="photo"
                v-model="profilePicture"
              />
              <ProfileUpload v-else />
            </div>
            <FormField
              class="name-input"
              :form-field="nameField"
              v-model="nameField.value"
            />
            <FormField
              class="surname-input"
              :form-field="surnameField"
              v-model="surnameField.value"
            />
            <FormField
              class="mail-input"
              :form-field="mailField"
              v-model="mailField.value"
            />
          </div>
          <div class="row row-full">
            <FormField
              class="title-input"
              :form-field="headlineField"
              v-model="headlineField.value"
            />
          </div>
          <div class="row row-full">
            <FormField
              class="title-input"
              :form-field="phoneField"
              v-model="phoneField.value"
            />
          </div>
          <div class="row row-full">
            <FormField
              class="title-input"
              :form-field="addressField"
              v-model="addressField.value"
            />
          </div>
          <div class="row row-two">
            <FormField
              class="title-input"
              :form-field="postCodeField"
              v-model="postCodeField.value"
            />
            <FormField
              class="title-input"
              :form-field="cityField"
              v-model="cityField.value"
            />
          </div>
          <div class="row row-full">
            <FormField
              class="title-input"
              :form-field="websiteField"
              v-model="websiteField.value"
            />
          </div>
          <div class="row row-full">
            <FormField
              class="title-input"
              :form-field="linkedinField"
              v-model="linkedinField.value"
            />
          </div>
          <div class="row row-full">
            <FormField
              class="title-input"
              :form-field="githubField"
              v-model="githubField.value"
            />
          </div>
        </form>
      </CollapsibleContent>
    </CollapsibleSection>
  </div>
</template>

<script>
import FormField from "@/components/form/FormField";
import CollapsibleContent from "@/components/collapse/CollapsibleContent";
import CollapsibleSection from "@/components/collapse/CollapsibleSection";
import ProfileUpload from "@/components/display/header/ProfileUpload";

export default {
  name: "PersonalInformation",
  components: {
    ProfileUpload,
    FormField,
    CollapsibleContent,
    CollapsibleSection,
  },
  methods: {},
  watch: {
    "nameField.value": function (val) {
      this.$store.state.personalInformation.name = val;
    },
    "surnameField.value": function (val) {
      this.$store.state.personalInformation.surname = val;
    },
    "mailField.value": function (val) {
      this.$store.state.personalInformation.mail = val;
    },
    "headlineField.value": function (val) {
      this.$store.state.personalInformation.headline = val;
    },
    "phoneField.value": function (val) {
      this.$store.state.personalInformation.phone = val;
    },
    "addressField.value": function (val) {
      this.$store.state.personalInformation.address = val;
    },
    "postCodeField.value": function (val) {
      this.$store.state.personalInformation.postCode = val;
    },
    "cityField.value": function (val) {
      this.$store.state.personalInformation.city = val;
    },
    "websiteField.value": function (val) {
      let data = this.$store.state.personalInformation.personalDetail.find(
        (x) => x.subtitle.includes("Website")
      );
      data.content = val;
    },
    "linkedinField.value": function (val) {
      let data = this.$store.state.personalInformation.personalDetail.find(
        (x) => x.subtitle.includes("LinkedIn")
      );
      data.content = val;
    },
    "githubField.value": function (val) {
      let data = this.$store.state.personalInformation.personalDetail.find(
        (x) => x.subtitle.includes("Github")
      );
      data.content = val;
    },
  },
  data() {
    return {
      isSlotActive: false,
      name: "",
      password: "",
      profilePicture: "",
      errorMessage: false,
      profileField: {
        tag: "input",
        type: "text",
        name: "photo",
        label: "Photo",
        placeholder: "",
        value: "",
      },
      nameField: {
        tag: "input",
        type: "text",
        name: "name",
        label: "Given name",
        placeholder: "",
        value: "",
      },
      surnameField: {
        tag: "input",
        type: "text",
        name: "surname",
        label: "Family name",
        placeholder: "",
        value: "",
      },
      mailField: {
        tag: "input",
        type: "text",
        name: "mail",
        label: "Email address",
        placeholder: "",
        value: "",
      },
      headlineField: {
        tag: "input",
        type: "text",
        name: "headline",
        label: "Headline",
        placeholder: "",
        value: "",
      },
      phoneField: {
        tag: "input",
        type: "text",
        name: "phone",
        label: "Phone number",
        placeholder: "",
        value: "",
      },
      addressField: {
        tag: "input",
        type: "text",
        name: "address",
        label: "Address",
        placeholder: "",
        value: "",
      },
      postCodeField: {
        tag: "input",
        type: "text",
        name: "postCode",
        label: "Post Code",
        placeholder: "",
        value: "",
      },
      cityField: {
        tag: "input",
        type: "text",
        name: "city",
        label: "City",
        placeholder: "",
        value: "",
      },
      websiteField: {
        tag: "input",
        type: "text",
        name: "website",
        label: "Website",
        placeholder: "",
        value: "",
      },
      linkedinField: {
        tag: "input",
        type: "text",
        name: "linkedIn",
        label: "LinkedIn",
        placeholder: "",
        value: "",
      },
      githubField: {
        tag: "input",
        type: "text",
        name: "github",
        label: "Github",
        placeholder: "",
        value: "",
      },
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
  grid-template-areas: "photo name name surname surname" "photo mail mail mail mail";
  gap: 5px;
}
.row-full {
  grid-template-areas: none;
}
.row-two {
  grid-template-columns: repeat(2, 1fr);
}
.photo-input {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 182px;
  grid-area: photo;
  text-align: left;
  input {
    border-radius: 8px;
  }
}
.name-input {
  grid-area: name;
}
.surname-input {
  grid-area: surname;
}
.mail-input {
  grid-area: mail;
}
</style>
