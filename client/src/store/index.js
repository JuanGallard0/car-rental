import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showLoginModal: false,
  },

  getters: {},

  mutations: {
    setShowLoginModal(state, payload) {
      state.showLoginModal = payload;
    },
  },

  actions: {},

  modules: {},
});
