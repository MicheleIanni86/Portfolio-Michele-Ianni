<template>
  <div class="main-container">
    <div class="border-container">

      <div class="container">
        <div class="my-image">
          <img src="/io.png" alt="Profile Image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
};
</script>

<style lang="scss" scoped>
.main-container {
  height: calc(100% - 200px);
  background-color: rgb(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;

  .border-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 99%;
    height: 99%;
    border: 5px solid greenyellow;
    color: greenyellow;
    font-family: 'Martian Mono Variable', monospace;
  }
}

.container {
  display: flex;
  justify-content: center;

  height: 100%;
}

.my-image {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;


  img {
    max-width: 100%;
    max-height: 100%;

  }
}
</style>
