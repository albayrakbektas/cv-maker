<template>
  <div class="form-field">
    <label :for="formField.name">{{ formField.label }}</label>
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
  padding: 0 15px;
  background: white;
  outline: none;
  border: 1px solid grey;
  color: black;
  font-weight: 600;
  font-size: 1rem;
  box-sizing: border-box;
  border-radius: 8px;
}
label {
  float: left;
  font-weight: 400;
}
textarea {
  height: 150px;
  padding: 15px 0 15px 65px;
}
.textarea-label {
  height: 150px;
  align-items: baseline;
  i {
    transform: translateY(20px);
  }
}
i {
  color: #8c8c8e;
  font-size: 11px;
  transition: 0.4s ease-in-out;
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
  cursor: pointer;
}
.fa-solid {
  opacity: 1;
}
</style>
