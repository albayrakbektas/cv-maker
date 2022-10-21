<template>
  <div class="collapsible-content">
    <slot></slot>
    <SpanIcon :button="button" />
  </div>
</template>

<script>
import SpanIcon from "@/components/button/SpanIcon";
export default {
  name: "CollapsibleContent",
  components: { SpanIcon },
  data() {
    return {
      button: {
        span: "button",
        iconClass: "fa-solid fa-chevron-down",
        grid: "is",
      },
    };
  },
};
</script>

<style scoped lang="scss"></style>
