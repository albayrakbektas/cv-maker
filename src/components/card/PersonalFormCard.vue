<template>
  <form>
    <div class="row">
      <div class="photo-input">
        <!--        <label for="photo">Photo</label>-->
        <!--        <input name="photo" v-model="profilePicture" />-->
        <ProfileUpload />
      </div>
      <div>
        <div class="row-two">
          <div class="input-container">
            <label for="company">company</label>
            <input name="company" v-model="card.rowCard.subtitle[0]" />
          </div>
          <div class="input-container">
            <label for="city">city</label>
            <input name="city" v-model="card.rowCard.subtitle[1]" />
          </div>
        </div>
        <div class="input-container">
          <label for="job">Education</label>
          <input name="job" v-model="card.title" />
        </div>
      </div>
    </div>
    <div class="input-container">
      <label for="job">Education</label>
      <input name="job" v-model="card.title" />
    </div>
    <div class="row-two">
      <div class="input-container">
        <label for="company">company</label>
        <input name="company" v-model="card.rowCard.subtitle[0]" />
      </div>
      <div class="input-container">
        <label for="city">city</label>
        <input name="city" v-model="card.rowCard.subtitle[1]" />
      </div>
    </div>
    <div class="row-two">
      <div class="row-two">
        <div class="input-container">
          <label for="startMonth">startMonth</label>
          <input name="startMonth" v-model="card.dateStart.month" />
        </div>
        <div class="input-container">
          <label for="startYear">startYear</label>
          <input name="startYear" v-model="card.dateStart.year" />
        </div>
      </div>
      <div class="row-two">
        <div class="input-container">
          <label for="endMonth">endMonth</label>
          <input name="endMonth" v-model="card.dateEnd.month" />
        </div>
        <div class="input-container">
          <label for="endYear">endYear</label>
          <input name="endYear" v-model="card.dateEnd.year" />
        </div>
      </div>
    </div>
    <div class="input-container">
      <label for="Description">Description</label>
      <input name="description" v-model="card.rowCard.content" />
    </div>
  </form>
</template>

<script>
import ProfileUpload from "@/components/display/header/ProfileUpload";
export default {
  name: "PersonalFormCard",
  components: { ProfileUpload },
  methods: {},
  props: {
    data: Object,
  },
  mounted() {
    this.card = this.data;
  },
  data() {
    return {
      cardIndex: 0,
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

<style scoped lang="scss">
form {
  text-align: left;
}
input {
  margin: 0.1em 0 1.2em 0;
}
label {
  display: inline-block;
  font-size: 1.4em;
}
.row-two {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5em;
}
.input-container {
  display: grid;
}
.row {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 5px;
}
.row-full {
  grid-template-areas: none;
}
.row-two {
  grid-template-columns: repeat(2, 1fr);
}
.photo-input {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  text-align: left;
  input {
    border-radius: 8px;
  }
}
.upload-container {
  position: absolute;
}
</style>
