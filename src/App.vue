<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>
<script>
export default {
  computed: {
    getFontFamily() {
      return this.$store.getters.getCvStyleProperty("fontFamily");
    },
    getColor() {
      return this.$store.getters.getCvStyleProperty("color");
    },
  },
  watch: {
    getFontFamily: {
      handler: function (val) {
        this.setFontFamily(val);
      },
      deep: true,
    },
    getColor: {
      handler: function (val) {
        console.log(val);
        this.setColor(val);
      },
      deep: true,
    },
  },
  methods: {
    setFontFamily(type) {
      document.body.style.fontFamily = `"${type}, sans-serif !important"`;
      this.$refs.app.style.fontFamily = `"${type}, sans-serif !important"`;
    },
    setColor(type) {
      let titles = document.getElementsByTagName("h4");
      Array.from(titles).map((title) => {
        title.style.color = `${type}`;
      });
      let header = document.getElementById("display-header");
      header.style.backgroundColor = type;
    },
  },
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: Poppins, sans-serif;
}
i {
  font-weight: 900;
}
.pd {
  padding: 30px;
}
h1 {
  font-size: 1.55rem;
  letter-spacing: 0;
}
h4 {
  font-size: 0.8rem;
}
form {
  //padding: 0 0 15px 0;
}
input {
  background-color: rgba(244, 244, 255, 1);
  border: 1px solid rgba(240, 248, 255, 1);
}
a {
  text-decoration: none;
  color: unset;
}
button {
  translate: 0 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    translate: 0 -2px;
  }
}
</style>
