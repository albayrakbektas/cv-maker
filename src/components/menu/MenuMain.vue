<template>
  <div class="menu-main-container">
    <MenuHeader />
    <SpanIcon
      @button-handler="changeSubButtons"
      :button="button.type"
      :button-style="button.style"
      :span-style="button.spanStyle"
      :icon-style="button.iconStyle"
      :show-sub-buttons="showSubButtons"
    >
      <SpanIcon
        :button="settingsButton.type"
        :button-style="settingsButton.style"
        :span-style="settingsButton.spanStyle"
        :icon-style="settingsButton.iconStyle"
      />
      <SpanIcon
        :button="logoutButton.type"
        :button-style="logoutButton.style"
        :span-style="logoutButton.spanStyle"
        :icon-style="logoutButton.iconStyle"
        @button-handler="signOut"
      />
    </SpanIcon>
  </div>
</template>

<script>
import SpanIcon from "@/components/button/SpanIcon";
import { signout } from "@/firebaseMethods";
import MenuHeader from "@/components/menu/MenuHeader";
export default {
  name: "MenuMain",
  components: { MenuHeader, SpanIcon },
  computed: {
    isMobile: function () {
      return this.$store.getters.getIsMobile;
    },
  },
  methods: {
    async signOut() {
      await signout();
      await this.$router.push("/login");
    },
    changeSubButtons() {
      this.showSubButtons = !this.showSubButtons;
    },
  },
  data() {
    return {
      showSubButtons: false,
      settingsButton: {
        type: {
          grid: "is",
          iconClass: "fa-solid fa-gear",
          span: "Settings",
        },
        style: {
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 1)",
          backgroundImage:
            "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.3))",
        },
        spanStyle: {
          color: "#ffffff",
          fontSize: "2rem",
        },
        iconStyle: {
          color: "#ffffff",
          fontSize: "1.8rem",
        },
      },
      logoutButton: {
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
        spanStyle: {
          color: "#ffffff",
          fontSize: "2rem",
        },
        iconStyle: {
          color: "#ffffff",
          fontSize: "1.8rem",
        },
      },
      button: {
        type: {
          grid: "is",
          iconClass: "fa-solid fa-user",
          span: "User",
          isMobile: !!this.$store.state.isMobile,
          subButtons: [
            {
              button: {
                grid: "is",
                iconClass: "fa-solid fa-profile",
                span: "Settings",
              },
              buttonStyle: {
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 1)",
                backgroundImage:
                  "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.3))",
              },
              spanStyle: {
                color: "#ffffff",
                fontSize: "2rem",
              },
              iconStyle: {
                color: "#ffffff",
                fontSize: "1.8rem",
              },
            },
            {
              button: {
                grid: "is",
                iconClass: "fa-solid fa-right-from-bracket",
                span: "Log out",
              },
              buttonStyle: {
                width: "100%",
                backgroundColor: "rgba(0, 0, 0, 1)",
                backgroundImage:
                  "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.3))",
              },
              spanStyle: {
                color: "#ffffff",
                fontSize: "2rem",
              },
              iconStyle: {
                color: "#ffffff",
                fontSize: "1.8rem",
              },
            },
          ],
        },
        style: {
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 1)",
          backgroundImage:
            "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 0, 0.3))",
        },
        spanStyle: {
          color: "#ffffff",
          fontSize: "2rem",
        },
        iconStyle: {
          color: "#ffffff",
          fontSize: "1.8rem",
        },
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
@media (max-width: 500px) {
  .menu-main-container {
    width: 100%;
    right: 0;
    bottom: unset;
    box-sizing: border-box;
    justify-content: end;
    padding: 1rem;
    z-index: 99;
  }
}
</style>
