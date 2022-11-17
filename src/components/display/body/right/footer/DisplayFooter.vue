<template>
  <div class="footer">
    <div
      class="display-footer"
      :class="{
        isPreviewDisplayFooter: $route.name === 'home',
        'zoomed-display-footer': getIsZoomed,
        'mobile-active-display-footer': getIsMobilePreview,
        'display-footer-hidden': $store.state.isMobile && !getIsMobilePreview,
      }"
    >
      <TooltipButton
        v-for="(item, index) of footerLeftButtons"
        :button="item"
        :key="item.leftIcon + index"
      />
      <div class="display-footer-mid">
        <TooltipButton
          v-for="(item, index) of footerMidButtons"
          :button="item"
          :key="item.leftIcon + index"
        />
        <ColorPicker />
      </div>
      <ZoomButton @event-handler="zoomImg" icon-class="fa-solid fa-expand" />
    </div>
  </div>
</template>

<script>
import TooltipButton from "@/components/button/TooltipButton";
import ColorPicker from "@/components/button/ColorPicker";
import ZoomButton from "@/components/button/ZoomButton";
export default {
  name: "DisplayFooter",
  components: { ZoomButton, ColorPicker, TooltipButton },
  data() {
    return {
      footerLeftButtons: [
        {
          toolTip: {
            type: "fontFamily",
            list: [
              { key: "Arial", value: "Arial" },
              { key: "Cairo", value: "Cairo" },
              { key: "Calibri", value: "Calibri" },
              { key: "Courier New", value: "Courier New" },
              { key: "DejaVu Sans", value: "DejaVu Sans" },
              { key: "Garamond", value: "Garamond" },
              { key: "Georgia", value: "Georgia" },
              { key: "Helvetica", value: "Helvetica" },
              { key: "Lato", value: "Lato" },
              { key: "Noto Sans", value: "Noto Sans" },
              { key: "Noto Serif", value: "Noto Serif" },
              { key: "Poppins", value: "Poppins" },
              { key: "Times New Roman", value: "Times New Roman" },
              { key: "Trebuchet", value: "Trebuchet" },
            ],
          },
          leftIcon: "fa-solid fa-table",
        },
      ],
      footerMidButtons: [
        {
          toolTip: {
            type: "fontFamily",
            list: [
              { key: "Arial", value: "Arial" },
              { key: "Cairo", value: "Cairo" },
              { key: "Calibri", value: "Calibri" },
              { key: "Courier New", value: "Courier New" },
              { key: "DejaVu Sans", value: "DejaVu Sans" },
              { key: "Garamond", value: "Garamond" },
              { key: "Georgia", value: "Georgia" },
              { key: "Helvetica", value: "Helvetica" },
              { key: "Lato", value: "Lato" },
              { key: "Noto Sans", value: "Noto Sans" },
              { key: "Noto Serif", value: "Noto Serif" },
              { key: "Poppins", value: "Poppins" },
              { key: "Times New Roman", value: "Times New Roman" },
              { key: "Trebuchet", value: "Trebuchet" },
            ],
          },
          leftIcon: "fa-solid fa-font",
        },
        {
          toolTip: {
            type: "fontSize",
            list: [
              { key: "Xs", value: "8px" },
              { key: "S", value: "9px" },
              { key: "M", value: "10px" },
              { key: "L", value: "12px" },
              { key: "Xl", value: "14px" },
            ],
          },
          leftIcon: "fa-solid fa-font",
        },
      ],
      footerRightButtons: [
        {
          toolTip: {
            type: "fontFamily",
          },
          isRemoveIcon: true,
          leftIcon: "fa-solid fa-expand",
        },
      ],
    };
  },
  computed: {
    getIsZoomed() {
      return this.$store.getters.getIsZoomed;
    },
    getIsMobilePreview() {
      return this.$store.getters.getIsMobilePreview;
    },
  },
  methods: {
    zoomImg() {
      if (this.getIsMobilePreview) {
        this.$store.state.isMobilePreview = false;
      } else {
        if (this.getIsZoomed) {
          this.$store.commit("setZoomedStyle", false);
          this.$store.commit("setIsZoomed", false);
        } else {
          this.$store.commit("setZoomedStyle", true);
          this.$store.commit("setIsZoomed", true);
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.display-footer {
  height: 70px;
  background-color: #2d2d3a;
  position: fixed;
  bottom: 1rem;
  left: calc(50% + 1rem);
  right: 1rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  border-radius: 8px;
  z-index: 99999999999999999;
  translate: 0;
}
.zoomed-display-footer {
  left: 1rem;
}
.display-footer-mid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.isPreviewDisplayFooter {
  display: none !important;
}
.display-container.footer {
  z-index: 9999999;
  top: unset;
}
.display-footer-hidden {
  translate: 100vw;
}
@media (max-width: 500px) {
  .mobile-active-display-footer {
    left: 1rem;
  }
}
</style>
