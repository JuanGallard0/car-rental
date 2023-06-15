<template>
  <div>
    <md-dialog :md-active="this.$store.state.showLoginModal">
      <md-dialog-title>Sign in to continue</md-dialog-title>

      <div class="auth-form-wrap">
        <md-field>
          <md-icon>email</md-icon>
          <label>Email</label>
          <md-input v-model="email" required type="email"></md-input>
        </md-field>

        <md-field>
          <md-icon>lock</md-icon>
          <label>Password</label>
          <md-input v-model="password" required type="password"></md-input>
        </md-field>

        <h4>Dont'have an account?</h4>
        <router-link class="link" :to="{ name: 'Register' }"
          >Create one</router-link
        >
      </div>

      <md-dialog-actions>
        <div class="">
          <span v-show="hasMessages" class="md-error">{{ errorMsg }}</span>
        </div>
        <md-button class="md-primary" @click="closeDialog()">Close</md-button>
        <md-button class="md-primary" @click="login()">Sign In</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import { signIn } from "@/api/auth";
import { getAuth, signInWithCustomToken } from "@firebase/auth";

export default {
  name: "LoginModal",
  data() {
    return {
      hasMessages: false,
      errorMsg: "Please fill every field.",
      email: "",
      password: "",
    };
  },

  created() {
    this.$store.commit("setShowLoginModal", false);
  },

  methods: {
    openDialog() {
      this.$store.commit("setShowLoginModal", true);
    },
    closeDialog() {
      this.$store.commit("setShowLoginModal", false);
    },
    async login() {
      try {
        const data = {
          email: this.email,
          password: this.password,
        };
        console.log(data);
        const { token } = await signIn(data);
        await signInWithCustomToken(getAuth(), token);
        this.closeDialog();
      } catch (error) {
        console.log(error);
        this.errorMsg = error.response.data.error.code;
        this.hasMessages = true;
      }
      this.hasMessages = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.md-dialog /deep/.md-dialog-container {
  max-width: 768px;
}

.auth-form-wrap {
  display: flex;
  flex-direction: column;
  margin: auto auto 2em auto;
}

h4,
a {
  text-align: center;
}
</style>
