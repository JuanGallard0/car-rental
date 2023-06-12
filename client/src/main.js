import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/config/firebaseInit";
import { getAuth } from "firebase/auth";

import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.config.productionTip = false;
Vue.use(VueMaterial);

let app;
getAuth().onAuthStateChanged((user) => {
  console.log("User: ", user);
  if (!app) {
    app = new Vue({
      router,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
