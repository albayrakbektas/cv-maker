<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
i {
  font-weight: 900;
}
.pd {
  padding: 30px;
}
h1 {
  font-size: 1.4rem;
}
h4 {
  font-size: 0.8rem;
}
form {
  //padding: 0 0 15px 0;
}
a {
  text-decoration: none;
  color: unset;
}
</style>
