<template>
  <div>
    <!--    <div-->
    <!--      v-if="button.subButtons && showSubButtons"-->
    <!--      class="dropdown-list-container"-->
    <!--    >-->
    <!--      <ButtonMain-->
    <!--        v-for="(item, index) of button.subButtons"-->
    <!--        :key="index"-->
    <!--        :button-style="item.buttonStyle"-->
    <!--        @button-handler="$emit('button-handler')"-->
    <!--        class="subButton"-->
    <!--      >-->
    <!--        <div-->
    <!--          class="span-icon"-->
    <!--          :class="[item.button.grid === 'si' ? 'si' : 'is']"-->
    <!--        >-->
    <!--          <i-->
    <!--            :style="item.iconStyle"-->
    <!--            :class="item.button.iconClass"-->
    <!--            class="f-xl"-->
    <!--          ></i>-->
    <!--          <span :style="item.spanStyle" v-if="item.button.span" class="f-xl">{{-->
    <!--            item.button.span-->
    <!--          }}</span>-->
    <!--        </div>-->
    <!--      </ButtonMain>-->
    <!--    </div>-->
    <div class="wrapper" v-if="showSubButtons">
      <slot></slot>
    </div>
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
  </div>
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
    showSubButtons: Boolean,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.subButton {
  &:hover {
    translate: 0 0;
  }
}
slot {
  gap: 2rem;
}
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
.wrapper {
  display: grid;
  gap: 1rem;
  width: 80%;
  float: right;
  padding: 1rem 0;
}
</style>
