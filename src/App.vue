<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: { Header, Main, Footer },
  methods: {}
};
</script>

<template>
  <div class="baseBackground">
    <div class="animated-border"></div>
    <div class="components-container">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.baseBackground {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: relative;
  overflow: hidden;
}

.animated-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 200%;
  background-image: repeating-linear-gradient(45deg,
      green 1px,
      rgb(15, 15, 15) 0px,
      rgb(30, 30, 30) 10px,
      black 20px);
  animation: animate-border 10s linear infinite;
  z-index: 1;
}

.components-container {
  position: relative;
  z-index: 2;
  background-color: black;
  height: 93%;
  width: 95%;
  display: flex;
  flex-direction: column;
}

@keyframes animate-border {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-50%, -50%);
  }
}
</style>
