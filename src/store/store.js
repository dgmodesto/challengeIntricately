import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    companies: []
  },
  mutations: {
    change(state, companies) {
      state.companies = companies;
    }
  },
  getters: {
    companies: state => state.companies
  }
});
