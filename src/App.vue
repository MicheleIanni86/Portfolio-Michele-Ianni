<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  data() {
    return {

    };
  },
  components: { Header, Main, Footer },

  methods: {

  }
};

</script>

<template>

  <div class="baseBackground">


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
  display: flex;
  justify-content: center;
  align-items: center;
}

.components-container {
  height: 90%;
  width: 90%;
  background-image: url(/public/vite.svg);
}
</style>
