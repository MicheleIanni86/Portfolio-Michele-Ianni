<script>
// Supports weights 100-800
import '@fontsource-variable/martian-mono';


</script>

<template>
  <div class="header-container">
    <div class="border-container">

      <div class="container d-flex justify-content-center align-items-center gap-3">
        <h1 class="m-0">MICHELE IANNI</h1>
        <h2 class="m-0 mx-4"><font-awesome-icon icon="laptop-code" beat /></h2>
        <h2 class="m-0">Jr. Full Stack Developer</h2>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: #000;
  color: red;

  .border-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99%;
    height: 89%;
    border: 5px solid greenyellow;
    color: greenyellow;
    font-family: 'Martian Mono Variable', monospace;
  }
}
</style>
