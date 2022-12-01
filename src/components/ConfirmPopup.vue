<template>
  <div
    class="confirm-popup-container"
    :class="{
      'confirm-popup-container-active': $store.state.isConfirmPopup,
    }"
  >
    <div
      class="confirm-popup"
      :class="{
        'confirm-popup-active': $store.state.isConfirmPopup,
      }"
    >
      <div class="popup-header">
        <h1>Delete resume?</h1>
        <ButtonMain
          :button-style="closeConfirmStyle"
          @button-handler="closeConfirmPopup"
        >
          <i class="fa-solid fa-xmark"></i>
        </ButtonMain>
      </div>
      <div>
        <h4>Are you sure you want to delete this resume?</h4>
      </div>
      <div class="popup-footer">
        <ButtonMain
          :button-style="cancelButtonStyle"
          @button-handler="closeConfirmPopup"
        >
          <p>Cancel</p>
        </ButtonMain>
        <ButtonMain
          :button-style="deleteButtonStyle"
          @button-handler="deleteCv"
        >
          <p>Delete</p>
        </ButtonMain>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonMain from "@/components/button/ButtonMain";
import { deleteCv, getCvList } from "@/firebaseMethods";
export default {
  name: "ConfirmPopup",
  components: { ButtonMain },
  data() {
    return {
      closeConfirmStyle: {
        padding: "0.5em",
        width: "3.5rem",
        height: "3.5rem",
      },
      cancelButtonStyle: {
        fontWeight: "900",
        padding: "1.2rem 2rem",
      },
      deleteButtonStyle: {
        backgroundColor: "#ff0000",
        color: "#ffffff",
        fontWeight: "900",
        padding: "1.2rem 2rem",
      },
    };
  },
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    closeConfirmPopup() {
      this.$store.state.isConfirmPopup = false;
    },
    async deleteCv() {
      await deleteCv(this.getUser.uid, this.$store.state.cvEditingP.id);
      this.$store.commit(
        "setCvList",
        await getCvList(this.$store.state.user.uid)
      );
      this.$store.state.isConfirmPopup = false;
    },
  },
};
</script>

<style scoped lang="scss">
.confirm-popup-container {
  position: absolute;
  top: -100%;
  left: -100%;
  width: 0;
  height: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  transition: all 0.4s ease-in-out;
}
.confirm-popup-container-active {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.confirm-popup {
  position: absolute;
  width: max-content;
  left: -100%;
  top: -100%;
  translate: -50% -50%;
  border: 1px solid #2d2d3a;
  background-color: #f5f5f5;
  z-index: 999999999;
  padding: 2rem 3rem;
  border-radius: 8px;
  transition: all 0.4s ease-in-out;
}
.confirm-popup-active {
  left: 50%;
  top: 50%;
  translate: -50% -50%;
}
.popup-header {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: space-between;
}
p {
  margin: 0;
}
.popup-footer {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: end;
  align-items: center;
  gap: 1rem;
}
</style>
