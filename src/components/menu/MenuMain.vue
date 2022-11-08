<template>
  <div class="menu-main-container">
    <SpanIcon
      @button-handler="signOut"
      :button="button.type"
      :button-style="button.style"
      :span-style="spanStyle"
      :icon-style="iconStyle"
    />
  </div>
</template>

<script>
import SpanIcon from "@/components/button/SpanIcon";
import { signout } from "@/firebaseMethods";
export default {
  name: "MenuMain",
  components: { SpanIcon },
  methods: {
    async signOut() {
      await signout();
      await this.$router.push("/login");
    },
  },
  data() {
    return {
      button: {
        type: {
          grid: "is",
          iconClass: "fa-solid fa-right-from-bracket",
          span: "Log out",
        },
        style: {
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 1)",
          backgroundImage:
            "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.3))",
        },
      },
      spanStyle: {
        color: "#ffffff",
        fontSize: "2rem",
      },
      iconStyle: {
        color: "#ffffff",
        fontSize: "1.8rem",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.menu-main-container {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 15vw;
  background-color: #2b2b35;
  padding: 2rem 1rem;
  display: grid;
  align-items: end;
}
</style>
