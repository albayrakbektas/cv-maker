<template>
  <div class="template-options-container">
    <div v-if="isShown" class="template-container">
      <div
        @click="showTemplates"
        v-for="(template, index) of templatesList"
        :key="index"
      >
        <TemplateBox :template="template" />
      </div>
    </div>
    <div @click="showTemplates" class="icon-button">
      <i class="fa-solid fa-table f-xl"></i>
      <i v-if="!isShown" class="fa-solid fa-chevron-down f-xl"></i>
      <i v-else class="fa-solid fa-chevron-up f-xl"></i>
    </div>
  </div>
</template>

<script>
import TemplateBox from "@/components/items/TemplateBox";
export default {
  name: "TemplateButton",
  components: { TemplateBox },
  data() {
    return {
      isShown: false,
      templatesList: [
        {
          src: "https://www.jobseeker.com/api/documents/template-preview/resume/en/6b4e13bd-4f63-452b-98b9-36f8ab6a0bff",
          alt: "Professional Template",
          name: "Professional",
        },
        {
          src: "https://www.jobseeker.com/api/documents/template-preview/resume/en/6b4e13bd-4f63-452b-98b9-36f8ab6a0bff",
          alt: "Modern Template",
          name: "Modern",
        },
      ],
    };
  },
  methods: {
    showTemplates() {
      this.isShown = !this.isShown;
    },
  },
};
</script>

<style scoped lang="scss">
.template-options-container {
}
.icon-button {
  position: relative;
  width: fit-content;
  padding: 1em;
  border: 1px solid transparent;
  background-image: none;
  transition: all 0.4s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  color: #ffffff;
  .fa-table {
    margin-right: 0.8em;
  }
  &:hover {
    border: 1px solid #8b8b8b;
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0.1),
      rgba(255, 0, 0, 0.3)
    );
  }
}
.template-container {
  position: absolute;
  top: -40vh;
  left: 1vw;
  right: 1vw;
  display: grid;
  grid-template-columns: repeat(2, auto);
  height: 300px;
  //width: 48vw;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 1rem;
}
</style>
