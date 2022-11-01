<template>
  <div class="profile-upload-container">
    <div v-if="isEditing" class="photo-edit-container">
      <SpanIcon @button-handler="deleteProfile" :button="button" />
    </div>
    <i class="fa-solid fa-camera"></i>
    <input type="file" @change="selectFile" />
    <img
      v-if="getPersonalInformationProperties"
      :src="getPersonalInformationProperties"
      alt=""
    />
  </div>
</template>

<script>
import SpanIcon from "@/components/button/SpanIcon";
export default {
  name: "ProfileUpload",
  components: { SpanIcon },
  data() {
    return {
      selected: "",
      button: {
        grid: "is",
        span: "Sil",
        iconClass: "fa-solid fa-trash",
      },
    };
  },
  props: {
    isEditing: Boolean,
  },
  computed: {
    getPersonalInformationProperties() {
      return this.$store.getters.getPersonalInformationProperties(
        "profilePicture"
      );
    },
  },
  methods: {
    selectFile(event) {
      const file = event.target.files[0];
      this.getBase64(file).then((res) => {
        this.selected = res;
        this.$store.state.cvData.personalInformation.profilePicture = res;
      });
    },
    deleteProfile() {
      this.selected = "";
      this.$store.state.cvData.personalInformation.profilePicture = "";
      this.$props.isEditing = false;
    },
    getBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    },
  },
};
</script>

<style scoped lang="scss">
.profile-upload-container {
  background-color: rgba(139, 139, 139, 0.6);
  position: relative;
  border-radius: 8px;
}
input {
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
  pointer-events: all;
  &:hover {
    border: 1px solid red;
    .profile-upload-container {
      border: 1px solid red;
    }
  }
}
i {
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
}
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.photo-edit-container {
  display: grid;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 99999999999999;
  position: absolute;
  left: 5px;
  top: 0;
  right: 0;
  height: 25%;
}
</style>
