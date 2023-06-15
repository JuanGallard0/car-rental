<template>
  <div>
    <md-toolbar>
      <h3 class="md-title" style="flex: 1">
        <router-link
          class="header"
          :to="{ name: 'CarCatalogue' }"
          style="color: black"
          >Car Rental</router-link
        >
      </h3>
      <div class="nav-links">
        <ul>
          <router-link
            class="link header"
            :to="{ name: 'CarCatalogue' }"
            style="color: black"
            >Catalogue</router-link
          >
        </ul>
      </div>

      <md-button v-show="user" class="md-icon-button">
        <md-icon>account_circle</md-icon>
      </md-button>

      <md-menu v-show="user" md-size="auto">
        <md-button md-menu-trigger class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item @click="signOut()">Log Out</md-menu-item>
        </md-menu-content>
      </md-menu>
    </md-toolbar>
  </div>
</template>

<script>
import { getAuth, signOut as firebaseSignOut } from "@firebase/auth";

export default {
  name: "NavBar",

  inject: ["user"],

  methods: {
    async signOut() {
      const auth = getAuth();
      await firebaseSignOut(auth);
      this.$router.push({ name: "CarCatalogue" });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  text-decoration: none;
}

.header:hover {
  text-decoration: none;
  cursor: pointer;
}
</style>
