<template>
  <div class="collapsible-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CollapsibleContent",
  components: {},
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
