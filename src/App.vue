<template>
  <div id="app">
    <!-- <router-view /> -->

    <Home />
  </div>
</template>

<script>
import Home from "./views/Home";
export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
