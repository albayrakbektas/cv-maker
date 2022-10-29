<template>
  <div class="container">
    <div class="login">
      <form @submit.prevent="login">
        <FormField :form-field="usernameField" v-model="usernameField.value" />
        <FormField :form-field="passwordField" v-model="passwordField.value" />
        <div class="form-row">
          <div class="form-button-field">
            <button type="submit">Giris</button>
          </div>
        </div>
      </form>
      <button @click="getUser">getuser</button>
      <div class="error-message">
        <div class="card">
          <router-link to="/register">to Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormField from "@/components/form/FormField";
import { signIn, getUser } from "@/firebaseMethods";
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
    getUser() {
      getUser();
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
        label: "Education",
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
  bottom: 30px;
  right: 30px;
}
.card {
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  background: linear-gradient(159deg, #2d2d3a 0%, #2b2b35 100%);
}
@media (max-width: 500px) {
  .login {
    width: 90%;
  }
}
</style>
