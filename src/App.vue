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
    getFontSize() {
      return this.$store.getters.getCvStyleProperty("fontSize");
    },
    getIsDownloading() {
      return this.$store.getters.getIsDownloading;
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
    // getIsZoomed: function () {
    //   this.setFontSize(this.$store.state.cvData.style.fontSize);
    // },
    getIsDownloading: function (val) {
      console.log(val);
      if (val) {
        console.log(val);
        this.setFontSize(this.$store.state.cvData.style.fontSize);
      } else {
        const root = document.querySelector(":root");
        root.style.fontSize = "10px";
      }
    },
    // getFontSize: {
    //   handler: function (val) {
    //     if (val) {
    //       this.setFontSize(val);
    //     }
    //   },
    //   deep: true,
    // },
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
    document.querySelector(":root").style.fontSize = "10px";
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
    setFontSize(type) {
      const root = document.querySelector(":root");
      root.style.fontSize = type.value;
      // console.log(type.value);
      // document.body.style.fontSize = `${type.value}`;
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
:root {
  --fontSize: "10px";
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
  font-size: var(--fontSize);
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: Poppins, sans-serif;
  box-sizing: border-box;
}
* {
  //font-size: 10px;
  letter-spacing: 0;
  line-height: 1.2;
}
.f-xxl {
  font-size: 2.5em;
}
.f-xl {
  font-size: 1.5em;
}
.f-il {
  font-size: 1.4em;
}
.f-l {
  font-size: 1.3em;
}
.f-m {
  font-size: 1em;
}
.f-s {
  font-size: 0.9em;
}
//.f-xxl-z {
//  font-size: 35px;
//  line-height: unset !important;
//}
//.f-xl-z {
//  font-size: 25px !important;
//}
//.f-l-z {
//  font-size: 20px !important;
//}
//.f-il-z {
//  font-size: 17px !important;
//}
//.f-m-z {
//  font-size: 15px !important;
//}
//.f-s-z {
//  font-size: 13px !important;
//}
#display-main {
  //.f-xxl {
  //  font-size: calc(var(--fontSize) * 2.5);
  //}
  //.f-xl {
  //  font-size: calc(var(--fontSize) * 1.5);
  //}
  //.f-il {
  //  font-size: calc(var(--fontSize) * 1.4);
  //}
  //.f-l {
  //  font-size: calc(var(--fontSize) * 1.3);
  //}
  //.f-m {
  //  font-size: calc(var(--fontSize) * 1);
  //}
  //.f-s {
  //  font-size: calc(var(--fontSize) * 0.9);
  //}

  .f-xxl-z {
    font-size: calc(var(--fontSize) * 3.5) !important;
    line-height: unset !important;
  }
  .f-xl-z {
    font-size: calc(var(--fontSize) * 2.5) !important;
  }
  .f-l-z {
    font-size: calc(var(--fontSize) * 2) !important;
  }
  .f-il-z {
    font-size: calc(var(--fontSize) * 1.7) !important;
  }
  .f-m-z {
    font-size: calc(var(--fontSize) * 1.5) !important;
  }
  .f-s-z {
    font-size: calc(var(--fontSize) * 1.3) !important;
  }
}
.display-header {
  //padding: 25px 15px;
}
i {
  font-weight: 900;
}
.pd {
  padding: 2em;
}
.f-xxl,
.f-xl,
.f-l,
.f-m,
.f-s {
  letter-spacing: 0;
}
h4 {
  font-size: 1.5em;
}
input {
  background-color: rgba(244, 244, 255, 1);
  border: 1px solid rgba(240, 248, 255, 1);
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  margin: 0.2em 0 0;
  font-size: 1.4em;
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
