<template>
  <div
    id="app"
    style="font-family: Poppins, sans-serif"
    ref="app"
    :class="[
      {
        'zoomed-app': getIsZoomed,
        'zoomed-style-app': getZoomedStyle,
        zoomedAppF: getIsZoomed,
      },
    ]"
  >
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      zoomedAppF: {
        backgroundColor: "red !important",
      },
    };
  },
  computed: {
    getFontFamily() {
      return this.$store.getters.getCvStyleProperty("fontFamily");
    },
    getColor() {
      return this.$store.getters.getCvStyleProperty("color");
    },
    getCvStyleProperty() {
      return (type) => this.$store.getters.getCvStyleProperty(type);
    },
    getIsZoomed() {
      return this.$store.state.isZoomed;
    },
    getZoomedStyle() {
      return this.$store.state.zoomedStyle;
    },
  },
  watch: {
    getFontFamily: {
      handler: function (val) {
        if (val) {
          this.setFontFamily(val);
        }
      },
      deep: true,
    },
    getColor: {
      handler: function (val) {
        if (val) {
          this.setColor(val);
        }
      },
      deep: true,
    },
  },
  mounted() {
    this.onResize();
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      window.innerWidth <= 500
        ? this.$store.commit("setIsMobile", true)
        : this.$store.commit("setIsMobile", false);
    },
    setFontFamily(type) {
      document.body.style.fontFamily = `${type.value}`;
      this.$refs.app.style.fontFamily = `${type.value}`;
    },
    setColor(type) {
      let titles = document.getElementsByTagName("h4");
      Array.from(titles).map((title) => {
        title.style.color = `${type}`;
      });
      let header = document.getElementById("display-header");
      if (header) {
        header.style.backgroundColor = type;
      }
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
  font-size: 10px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: Poppins, sans-serif;
  box-sizing: border-box;
}
* {
  font-size: 10px;
  letter-spacing: 0;
  line-height: 1.2;
}
.f-xxl {
  font-size: 2.5rem;
}
.f-xl {
  font-size: 1.5rem;
}
.f-il {
  font-size: 1.4rem;
}
.f-l {
  font-size: 1.3rem;
}
.f-m {
  font-size: 1rem;
}
.f-s {
  font-size: 0.9rem;
}
.f-xxl-z {
  font-size: 35px;
  line-height: unset !important;
}
.f-xl-z {
  font-size: 25px !important;
}
.f-l-z {
  font-size: 20px !important;
}
.f-il-z {
  font-size: 17px !important;
}
.f-m-z {
  font-size: 15px !important;
}
.f-s-z {
  font-size: 13px !important;
}
.display-header {
  //padding: 25px 15px;
}
i {
  font-weight: 900;
}
.pd {
  padding: 2rem;
}
.f-xxl,
.f-xl,
.f-l,
.f-m,
.f-s {
  letter-spacing: 0;
}
h4 {
  font-size: 1.5rem;
}
input {
  background-color: rgba(244, 244, 255, 1);
  border: 1px solid rgba(240, 248, 255, 1);
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0.2rem 0 0;
  font-size: 1.4rem;
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
