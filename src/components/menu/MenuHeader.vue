<template>
  <div class="menu-header-container">
    <div class="menu-header-content">Bektas CV Maker</div>
  </div>
</template>

<script>
export default {
  name: "MenuHeader",
};
</script>

<style scoped lang="scss">
.menu-header-container {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 7rem;
  background-color: #000000;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 1),
    rgba(255, 0, 0, 0.6)
  );
  background-size: 200% 200%;
  animation: background 10s ease-in-out infinite;
  //display: grid;
  align-items: center;
  justify-content: center;
}
@keyframes background {
  0% {
    background-position: 10% 0;
  }
  50% {
    background-position: 91% 100%;
  }
  100% {
    background-position: 10% 0;
  }
}
.menu-header-content {
  //color: rgba(255, 255, 255, 0.1);
  font-size: 2rem;
  font-weight: 900;
  animation: color 10s ease-in-out infinite;
}
@keyframes color {
  0% {
    color: rgb(73, 73, 73);
  }
  10% {
    color: rgb(47, 37, 37);
  }
  20% {
    color: rgb(54, 28, 28);
  }
  30% {
    color: rgb(80, 19, 19);
  }
  40% {
    color: rgb(54, 28, 28);
  }
  50% {
    color: rgb(84, 0, 0);
  }
  60% {
    color: rgb(54, 28, 28);
  }
  70% {
    color: rgb(80, 19, 19);
  }
  80% {
    color: rgb(54, 28, 28);
  }
  90% {
    color: rgb(47, 37, 37);
  }
  100% {
    color: rgb(73, 73, 73);
  }
}
</style>
