<template>
  <div class="collapsible-content">
    <!--    <div v-if="condition">-->
    <slot></slot>
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "CollapsibleContent",
  components: {},
  props: {
    condition: Boolean,
  },
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

<style scoped lang="scss">
.collapsible-content {
  //margin-bottom: 1em;
}
</style>
