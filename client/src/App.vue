<template>
  <div id="app">
    <NavBar />
    <CarCatalogue />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import CarCatalogue from "./views/CarCatalogue.vue";

export default {
  name: "App",

  components: { NavBar, CarCatalogue },
};
</script>

<style lang="scss">
@import "../scss/main.scss";
</style>
