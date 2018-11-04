import Vuex from 'vuex';
import Vue from 'vue';
import { user } from '@/store/modules/user';
import Home from '@/store/modules/Home';

Vue.use(Vuex);

export default new Vuex.Store<any>({
  modules: {
    user,
    Home
  }
});
