<template>
  <div class="container">
    <div class="login">
      <form @submit.prevent="register">
        <FormField :form-field="usernameField" v-model="usernameField.value" />
        <FormField :form-field="passwordField" v-model="passwordField.value" />
        <div class="form-row">
          <div class="form-button-field">
            <button class="f-l" type="submit">Register</button>
          </div>
        </div>
      </form>
      <div class="error-message">
        <div class="card">
          <span class="f-l">Already have an account?</span>
          <router-link class="f-l" to="/login">Log in</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormField from "@/components/form/FormField";
// import * as firebase from "firebase/app";
import "firebase/auth";
import { getUser, register } from "@/firebaseMethods";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "@/main";

export default {
  name: "RegisterView",
  components: { FormField },
  methods: {
    async register(e) {
      try {
        e.preventDefault();
        await register(this.username, this.password);
        await this.$router.replace({ name: "login" });
      } catch (e) {
        console.log(e);
      }
    },
    async getUser() {
      this.user = await getUser();
    },
  },
  watch: {
    "usernameField.value": function (val) {
      this.username = val;
    },
    "passwordField.value": function (val) {
      this.password = val;
    },
  },
  data() {
    return {
      user: "",
      username: "",
      password: "",
      button: {},
      errorMessage: false,
      usernameField: {
        tag: "input",
        type: "text",
        name: "education",
        label: "Email",
        placeholder: "Email",
        value: "",
        icon: "fa-solid fa-user",
      },
      passwordField: {
        tag: "input",
        type: "text",
        name: "password",
        label: "Password",
        placeholder: "Password",
        value: "",
        icon: "fa-solid fa-lock",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
}
.login {
  position: relative;
  width: 30%;
  margin: auto;
  padding: 2rem 4rem;
  translate: 0 50%;
  border: 1px solid black;
  box-sizing: border-box;
  box-shadow: -5px 5px 15px #000000;
  border-radius: 8px;
}
.error-message {
  position: absolute;
  bottom: 2rem;
  right: 4rem;
}
.card {
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
}
.form-button-field {
  width: fit-content;
}
button {
  cursor: pointer;
  padding: 12.5px 22px;
  background-color: rgba(0, 0, 0, 1);
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0.3),
    rgba(255, 0, 0, 0.5)
  );
  color: #ffffff;
}
span {
  padding-right: 5px;
}
a {
  color: #800080;
  font-weight: 900;
}
@media (max-width: 500px) {
  .login {
    width: 90%;
    padding: 2rem;
  }
}
</style>
