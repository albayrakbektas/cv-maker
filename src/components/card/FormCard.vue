<template>
  <form>
    <div class="input-container">
      <label for="job">Education</label>
      <input @input="changeWatch" name="job" v-model="card.title" />
    </div>
    <div class="row-two">
      <div class="input-container">
        <label for="company">company</label>
        <input
          @input="changeWatch"
          name="company"
          v-model="card.rowCard.subtitle[0]"
        />
      </div>
      <div class="input-container">
        <label for="city">city</label>
        <input
          @input="changeWatch"
          name="city"
          v-model="card.rowCard.subtitle[1]"
        />
      </div>
    </div>
    <div v-if="section !== 'reference'" class="row-two">
      <div class="row-two">
        <div class="input-container">
          <label for="startMonth">startMonth</label>
          <input
            @input="changeWatch"
            name="startMonth"
            v-model="card.dateStart.month"
          />
        </div>
        <div class="input-container">
          <label for="startYear">startYear</label>
          <input
            @input="changeWatch"
            name="startYear"
            v-model="card.dateStart.year"
          />
        </div>
      </div>
      <div class="row-two">
        <div class="input-container">
          <label for="endMonth">endMonth</label>
          <input
            @input="changeWatch"
            name="endMonth"
            v-model="card.dateEnd.month"
          />
        </div>
        <div class="input-container">
          <label for="endYear">endYear</label>
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
        <label for="phone">Phone Number</label>
        <input @input="changeWatch" name="phone" v-model="phone" />
      </div>
      <div class="input-container">
        <label for="email">Email Address</label>
        <input @input="changeWatch" name="email" v-model="email" />
      </div>
    </div>
    <div v-else class="input-container">
      <label for="description">Description</label>
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
    getState() {
      let cv = this.$store.state.cvData;
      console.log(cv);
    },
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
  /*width: 100%;*/
  /*width: -moz-available;*/
  /*width: -webkit-fill-available;*/
  /*width: fill-available;*/
  padding: 0.5rem;
  margin: 0.1rem 0 1.2rem 0;
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
</style>
