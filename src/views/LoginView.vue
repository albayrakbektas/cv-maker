<template>
  <div class="container">
    <div class="login">
      <form @submit.prevent="login">
        <FormField :form-field="usernameField" v-model="usernameField.value" />
        <FormField :form-field="passwordField" v-model="passwordField.value" />
        <div class="form-row">
          <div class="form-button-field">
            <button type="submit">Login</button>
          </div>
        </div>
      </form>
      <div class="error-message">
        <div class="card">
          <span>New to here?</span>
          <router-link to="/register">Signup</router-link>
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
        console.log("1");
        e.preventDefault();
        await signIn(this.username, this.password);
        await this.$router.replace({ name: "home" });
        console.log("2");
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
        placeholder: "",
        value: "",
      },
      passwordField: {
        tag: "input",
        type: "text",
        name: "password",
        label: "Password",
        placeholder: "",
        value: "",
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
  width: 50%;
  margin: auto;
  translate: 0 50%;
}
.error-message {
  position: absolute;
  bottom: 0;
  right: 0;
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
  }
}
</style>
