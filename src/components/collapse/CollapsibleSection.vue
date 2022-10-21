<template>
  <div class="collapsible-section">
    <div
      @click.stop="openSlot"
      class="collapsible-section-header"
      :class="{ 'disabled-header': isSlotActive }"
    >
      <h1>Personal Information</h1>
      <ButtonMain @button-handler="closeSlot">
        <i class="fa-solid fa-chevron-down"></i>
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
}
.slot-wrapper {
  height: 0;
}
.slot-active {
  height: 100%;
}
</style>
