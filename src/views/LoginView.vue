<template>
  <div class="container">
    <div class="login">
      <form @submit.prevent="login">
        <FormField :form-field="usernameField" v-model="usernameField.value" />
        <FormField :form-field="passwordField" v-model="passwordField.value" />
        <div class="form-row">
          <div class="form-button-field">
            <button class="f-l" type="submit">Login</button>
          </div>
        </div>
      </form>
      <div class="error-message">
        <div class="card">
          <span class="f-l">New to here?</span>
          <router-link class="f-l" to="/register">Signup</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormField from "@/components/form/FormField";
import { signIn } from "@/firebaseMethods";
export default {
  name: "LoginView",
  components: { FormField },
  methods: {
    async login(e) {
      try {
        e.preventDefault();
        await signIn(this.username, this.password);
        await this.$router.replace({ name: "home" });
      } catch (e) {
        console.log(e);
      }
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
  translate: 0 90%;
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
span,
a {
  text-shadow: -2px 2px 5px #000000;
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
