<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { getAuth } from "firebase/auth";
import { computed } from "vue";

export default {
  name: "App",

  components: { NavBar },

  data() {
    return {
      user: getAuth().currentUser,
    };
  },

  provide() {
    return {
      user: computed(() => this.user),
    };
  },

  created() {
    getAuth().onAuthStateChanged((user) => (this.user = user));
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
