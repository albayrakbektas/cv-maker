<template>
  <div class="collapsible-section" :class="{ 'section-active': isSlotActive }">
    <div
      @click.stop="openSlot"
      class="collapsible-section-header"
      :class="{ 'disabled-header': isSlotActive }"
    >
      <h1 class="f-xxl">{{ title }}</h1>
      <ButtonMain @button-handler="closeSlot">
        <i v-if="isSlotActive" class="fa-solid fa-chevron-up"></i>
        <i v-else class="fa-solid fa-chevron-down"></i>
      </ButtonMain>
    </div>
    <div class="slot-wrapper" :class="{ 'slot-active': isSlotActive }">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import ButtonMain from "@/components/button/ButtonMain";
export default {
  name: "CollapsibleSection",
  components: { ButtonMain },
  props: {
    title: String,
  },
  data() {
    return {
      isSlotActive: false,
    };
  },
  methods: {
    openSlot() {
      if (this.isSlotActive !== true) {
        this.isSlotActive = true;
      }
    },
    closeSlot() {
      this.isSlotActive = !this.isSlotActive;
    },
  },
};
</script>

<style scoped lang="scss">
.collapsible-section {
  border-bottom: 1px solid rgba(139, 139, 139, 0.3);
}
.section-active {
  padding-bottom: 2rem;
}
.collapsible-section-header {
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  cursor: pointer;
}
.disabled-header {
  cursor: unset;
  margin-bottom: 1rem;
}
.slot-wrapper {
  height: 0;
  visibility: hidden;
  overflow: hidden;
}
.slot-active {
  height: auto;
  //max-height: 100vh;
  visibility: visible;
  //overflow: scroll;
  display: grid;
  gap: 15px;
}
</style>
