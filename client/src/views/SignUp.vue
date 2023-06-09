<template>
  <div class="form-wrap">
    <md-field>
      <md-icon>account_circle</md-icon>
      <label>First Name</label>
      <md-input v-model="firstName" required></md-input>
      <span class="md-error">There is an error</span>
    </md-field>

    <md-field :class="messageClass">
      <md-icon>account_circle</md-icon>
      <label>Last Name</label>
      <md-input v-model="lastName" required></md-input>
      <span class="md-error">There is an error</span>
    </md-field>

    <md-field :class="messageClass">
      <md-icon>email</md-icon>
      <label>Email</label>
      <md-input v-model="email" required type="email"></md-input>
      <span class="md-error">There is an error</span>
    </md-field>

    <md-field :class="messageClass">
      <md-icon>lock</md-icon>
      <label>Password</label>
      <md-input v-model="password" required type="password"></md-input>
      <span class="md-error">There is an error</span>
    </md-field>

    <md-switch v-model="hasMessages"
      >{{ !hasMessages ? "Show" : "Hide" }} Errors</md-switch
    >
  </div>
</template>

<script>
export default {
  name: "SignUp",

  data: () => ({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    hasMessages: false,
  }),

  computed: {
    messageClass() {
      return {
        "md-invalid": this.hasMessages,
      };
    },
  },
};
</script>
