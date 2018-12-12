import Vuex from 'vuex';
import Vue from 'vue';
import { user } from 'modules/user';
import Home from 'modules/Home';

Vue.use(Vuex);

export default new Vuex.Store<any>({
  modules: {
    user,
    Home
  }
});
