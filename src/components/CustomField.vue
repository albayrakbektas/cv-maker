<template>
  <div class="input-container">
    <label class="f-il" for="github">
      <input
        ref="label-input"
        class="label-input f-il"
        placeholder="Title"
        :name="customField.title"
        :value="customField.value"
        @input="$emit('input', $event.target.value)"
      />
      {{ customField }}
    </label>
    <input
      :name="customField.content"
      :value="customField.value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "CustomField",
  props: {
    customField: Object,
    value: String,
  },
  data() {
    return {
      customFieldTitle: "",
    };
  },
  computed: {
    inputValue() {
      return this.$refs["label-input"].value;
    },
  },
  mounted() {
    this.resizeInput();
  },
  methods: {
    resizeInput() {
      const input = this.$refs["label-input"];
      if (input.value) {
        input.style.width = input.value.length + "ch";
      } else {
        input.style.width = input.placeholder.length + "ch";
      }
    },
  },
  watch: {
    customFieldTitle: function (val) {
      console.log(val);
      this.resizeInput();
    },
  },
};
</script>

<style scoped lang="scss">
label {
  display: inline-block;
  margin-bottom: 0.25em;
  input {
    border: none;
    width: unset;
    padding: 0.3rem 0;
    float: left;
    font-size: 1.2em;
    background-color: transparent;
    &:focus {
      border: none;
      outline: none;
      border-bottom: 1px solid #20202a !important;
    }
  }
}
.input-container {
  display: grid;
  margin: 0.5em 0;
}
</style>
