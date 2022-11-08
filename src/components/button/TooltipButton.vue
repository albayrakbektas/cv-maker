<template>
  <div>
    <div
      @click.stop="changeTooltipVisibility"
      class="tooltip-button-main-container"
    >
      <TooltipMain v-if="isShown" :tool-tip="button.toolTip" />
      <div class="button">
        <i :class="button.leftIcon" class="f-xl" />
        <span class="f-xl">{{ getCvStyle(button.toolTip.type).key }}</span>
        <div v-if="!button.isRemoveIcon">
          <i
            v-if="isShown"
            :class="
              button.rightIcon
                ? button.rightIcon
                : 'fa-solid fa-chevron-up f-xl'
            "
          />
          <i v-else class="fa-solid fa-chevron-down f-xl"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TooltipMain from "@/components/button/TooltipMain";
export default {
  name: "TooltipButton",
  components: { TooltipMain },
  props: {
    button: Object,
  },
  data() {
    return {
      isShown: false,
    };
  },
  computed: {
    getCvStyle() {
      return (type) => this.$store.getters.getCvStyleProperty(type);
    },
  },
  methods: {
    changeTooltipVisibility() {
      this.isShown = !this.isShown;
    },
    getSelectedStyle() {
      console.log(this.getCvStyle);
    },
  },
  mounted() {
    this.getSelectedStyle();
  },
};
</script>

<style scoped lang="scss">
.tooltip-button-main-container {
  position: relative;
  width: fit-content;
  padding: 1rem;
  border: 1px solid transparent;
  background-image: none;
  transition: all 0.4s ease-in-out;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    border: 1px solid #8b8b8b;
    background-image: linear-gradient(
      to right,
      rgba(255, 0, 0, 0.1),
      rgba(255, 0, 0, 0.3)
    );
  }
}
.button {
  display: flex;
  align-items: center;
}
i {
  color: #ffffff;
}
.fa-chevron-up,
.fa-chevron-down {
  padding-left: 0.8rem;
}
span {
  color: #ffffff;
  padding-left: 0.4rem;
}
</style>
