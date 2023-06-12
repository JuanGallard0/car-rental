<template>
  <div>
    <md-toolbar>
      <h3 class="md-title" style="flex: 1">Car Rental</h3>
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
    },
  },
};
</script>

<style lang="scss" scoped></style>
