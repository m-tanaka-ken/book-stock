import Vuex from 'vuex'
import Vue from 'vue'
import user from '@/store/modules/user'
import Home from '@/store/modules/Home'

Vue.use(Vuex)

// TODO 後で解決する
// @ts-ignore
export default new Vuex.Store({
  modules: {
    user,
    Home
  }
})
