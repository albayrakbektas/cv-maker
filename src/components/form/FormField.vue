<template>
  <div class="form-field">
    <!--    <label :for="formField.name">{{ formField.label }}</label>-->
    <label
      :for="formField.name"
      :class="[
        { 'label-yellow-bg': data },
        { 'textarea-label': formField.tag === 'textarea' },
      ]"
    >
      <i :class="formField.icon"></i>
    </label>
    <input
      v-if="formField.tag === 'input'"
      :type="formField.type"
      :name="formField.name"
      :placeholder="formField.placeholder"
      :value="formField.value"
      @input="$emit('input', $event.target.value)"
      @focusin="data = true"
      @focusout="data = false"
      required
    />
    <textarea
      v-else
      :name="formField.name"
      :placeholder="formField.placeholder"
      :value="formField.value"
      @input="$emit('input', $event.target.value)"
      @focusin="data = true"
      @focusout="data = false"
      required
    />
    <div
      v-show="formField.value && formField.name === 'password'"
      :class="[{ 'text-visibility': formField.name === 'password' }]"
    >
      <i
        @click="changeVisibility"
        class="show-hide"
        :class="[
          { 'fa-solid fa-eye-slash': isVisible },
          { 'fa-solid fa-eye': !isVisible },
        ]"
      ></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormField",
  props: {
    value: String,
    formField: Object,
  },
  data() {
    return {
      data: false,
      isVisible: false,
    };
  },
  methods: {
    changeVisibility() {
      if (this.$props.formField.type === "text") {
        this.$props.formField.type = "password";
        this.isVisible = false;
      } else if (this.$props.formField.type === "password") {
        this.$props.formField.type = "text";
        this.isVisible = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-field {
  position: relative;
  margin-bottom: 30px;
}
input,
textarea {
  width: 100%;
  height: 50px;
  padding: 0 15px 0 60px;
  background: linear-gradient(159deg, #252532 0%, #23232d 100%);
  outline: none;
  border: none;
  color: #ff0000;
  box-sizing: border-box;
  caret-color: #ff0000;
}
.label-yellow-bg {
  background-color: rgba(255, 0, 0, 1) !important;
  i {
    color: #20202a !important;
  }
}
label {
  position: absolute;
  left: 0;
  top: 0;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #20202a;
  transition: 0.4s ease-in-out;
  i {
    font-weight: 900;
  }
}
i {
  color: #8c8c8e;
  font-size: 11px;
  transition: 0.4s ease-in-out;
}
input {
  margin: 0 !important;
}
.text-visibility {
  position: absolute;
  height: 50px;
  width: 50px;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.show-hide {
  opacity: 0;
  transition: 1s ease-in-out;
  color: #ff0000;
  cursor: pointer;
}
.fa-solid {
  opacity: 1;
}
input:-webkit-autofill {
  -webkit-text-fill-color: #ff0000 !important;
  -webkit-box-shadow: 0 0 0 10em #23232d inset !important;
  background-clip: content-box !important;
}
</style>
