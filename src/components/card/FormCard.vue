<template>
  <form>
    <div class="input-container">
      <label class="f-il" for="job">Education</label>
      <input @input="changeWatch" name="job" v-model="card.title" />
    </div>
    <div class="row-two">
      <div class="input-container">
        <label class="f-il" for="company">company</label>
        <input
          @input="changeWatch"
          name="company"
          v-model="card.rowCard.subtitle[0]"
        />
      </div>
      <div class="input-container">
        <label class="f-il" for="city">city</label>
        <input
          @input="changeWatch"
          name="city"
          v-model="card.rowCard.subtitle[1]"
        />
      </div>
    </div>
    <div
      v-if="section !== 'reference'"
      class="row-two"
      :class="{ 'row-four': this.$store.state.isMobile }"
    >
      <div class="row-two">
        <div class="input-container">
          <label class="f-il" for="startMonth">startMonth</label>
          <input
            @input="changeWatch"
            name="startMonth"
            v-model="card.dateStart.month"
          />
        </div>
        <div class="input-container">
          <label class="f-il" for="startYear">startYear</label>
          <input
            @input="changeWatch"
            name="startYear"
            v-model="card.dateStart.year"
          />
        </div>
      </div>
      <div class="row-two">
        <div class="input-container">
          <label class="f-il" for="endMonth">endMonth</label>
          <input
            @input="changeWatch"
            name="endMonth"
            v-model="card.dateEnd.month"
          />
        </div>
        <div class="input-container">
          <label class="f-il" for="endYear">endYear</label>
          <input
            @input="changeWatch"
            name="endYear"
            v-model="card.dateEnd.year"
          />
        </div>
      </div>
    </div>
    <div class="row-two" v-if="section === 'reference'">
      <div class="input-container">
        <label class="f-il" for="phone">Phone Number</label>
        <input @input="changeWatch" name="phone" v-model="phone" />
      </div>
      <div class="input-container">
        <label class="f-il" for="email">Email Address</label>
        <input @input="changeWatch" name="email" v-model="email" />
      </div>
    </div>
    <div v-else class="input-container">
      <label class="f-il" for="description">Description</label>
      <input
        @input="changeWatch"
        name="description"
        v-model="card.rowCard.content"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: "FormCard",
  methods: {
    changeWatch() {
      this.$store.state.isChanging = !this.$store.state.isChanging;
      if (this.section === "reference") {
        this.card.rowCard.content = this.phone + ", " + this.email;
      }
    },
  },
  props: {
    data: Object,
    section: String,
  },
  mounted() {
    this.card = this.data;
    this.card.rowCard.content = this.card.rowCard.content.split(", ");
    this.phone = this.card.rowCard.content[0];
    this.email = this.card.rowCard.content[1];
  },
  data() {
    return {
      cardIndex: 0,
      phone: "",
      email: "",
      card: {
        title: "",
        dateStart: {
          month: "",
          year: "",
        },
        dateEnd: {
          month: "",
          year: "",
        },
        rowCard: {
          subtitle: ["", ""],
          content: "",
        },
      },
    };
  },
};
</script>

<style scoped>
form {
  text-align: left;
}
input {
  width: 100%;
  box-sizing: border-box;
  padding: 0.75rem 1rem;
  margin: 0.2rem 0 1.3rem 0;
  font-size: 1.4rem;
}
label {
  display: inline-block;
}
.row-two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}
.input-container {
  display: grid;
}
.row-four {
  grid-template-columns: 1fr;
}
</style>
