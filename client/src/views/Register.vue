<template>
  <div class="auth-form-wrap">
    <span class="md-display-2 header">Create an account</span>

    <md-field>
      <md-icon>account_circle</md-icon>
      <label>First Name</label>
      <md-input v-model="firstName" required></md-input>
    </md-field>

    <md-field>
      <md-icon>account_circle</md-icon>
      <label>Last Name</label>
      <md-input v-model="lastName" required></md-input>
    </md-field>

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

    <div class="button">
      <div class="">
        <span v-show="hasMessages" class="md-error">{{ errorMsg }}</span>
      </div>
      <md-button class="md-raised" type="submit" @click="register"
        >submit</md-button
      >
    </div>
  </div>
</template>

<script>
import { signUp } from "@/api/auth";
import { getAuth, signInWithCustomToken } from "@firebase/auth";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Register",

  data: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    hasMessages: false,
    errorMsg: "Please fill every field.",
  }),

  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== ""
      ) {
        const data = {
          email: this.email,
          password: this.password,
          first_name: this.firstName,
          last_name: this.lastName,
        };
        try {
          const { token } = await signUp(data);
          await signInWithCustomToken(getAuth(), token);
          this.$router.push({ name: "CarCatalogue" });
        } catch (error) {
          console.log(error);
          this.errorMsg = error.response.data.error.code;
          this.hasMessages = true;
        }
      } else {
        this.hasMessages = true;
      }
    },
  },

  computed: {
    messageClass() {
      return {
        "md-invalid": this.hasMessages,
      };
    },
  },
};
</script>

<style scoped lang="scss">
.auth-form-wrap {
  display: flex;
  flex-direction: column;
  margin: 10% auto auto auto;
  width: 70%;

  .header {
    margin-bottom: 1em;
    text-align: center;
  }

  .button {
    display: flex;
    justify-content: space-between;

    span {
      color: tomato;
    }
  }

  @media (min-width: $md) {
    width: 400px;
  }
  @media (min-width: $lg) {
    width: 500px;
  }
}
</style>
