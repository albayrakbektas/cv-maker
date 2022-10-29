<template>
  <form>
    <div class="input-container">
      <label for="skill">Skills</label> <br />
      <input @input="changeWatch" name="skill" v-model="card.subtitle[0]" />
    </div>
    <InputRange v-model="card.content" />
  </form>
</template>

<script>
import InputRange from "@/components/form/InputRange";
export default {
  name: "FormSkill",
  components: { InputRange },
  methods: {
    changeWatch() {
      this.$store.state.isChanging = !this.$store.state.isChanging;
    },
  },
  props: {
    data: Object,
    type: String,
  },
  mounted() {
    this.card = this.data;
  },
  watch: {
    "card.content": function (val) {
      console.log(
        "1    " +
          this.type +
          val +
          this.$store.state.cvData[this.type][0].subtitle[0]
      );
      this.$store.state.cvData[this.type].forEach((skill) => {
        if (skill.content === this.card.content) {
          this.card.content = val;
        }
      });
    },
    "card.subtitle[0]": function (val) {
      console.log("2   " + val + this.$store.state.cvData[this.type]);
      this.$store.state.cvData[this.type].forEach((skill) => {
        if (skill.content === this.card.content) {
          this.card.subtitle[0] = val;
        }
      });
    },
  },
  data() {
    return {
      range: "",
      card: {},
      skillField: {
        tag: "input",
        type: "text",
        name: "skill",
        label: "Skill",
        placeholder: "",
        value: "",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.input-container {
  text-align: left;
}
input {
  border-radius: 8px;
  width: 100%;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
}
</style>
