<template>
  <ButtonMain
    :button-style="buttonStyle"
    @button-handler="$emit('button-handler')"
  >
    <div class="span-icon" :class="[button.grid === 'si' ? 'si' : 'is']">
      <i :style="iconStyle" :class="button.iconClass" class="f-xl"></i>
      <span :style="spanStyle" v-if="button.span" class="f-xl">{{
        button.span
      }}</span>
    </div>
  </ButtonMain>
</template>

<script>
import ButtonMain from "@/components/button/ButtonMain";
export default {
  name: "SpanIcon",
  components: { ButtonMain },
  props: {
    button: Object,
    iconStyle: Object,
    spanStyle: Object,
    buttonStyle: Object,
  },
};
</script>

<style scoped lang="scss">
.span-icon {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-areas: "left right";
  justify-content: space-between;
  align-items: center;
  width: fit-content;
}
span {
  padding-left: 5px;
}
.si {
  i {
    grid-area: right;
  }
  span {
    grid-area: left;
  }
}
.is {
  i {
    grid-area: left;
  }
  span {
    grid-area: right;
  }
}
</style>
