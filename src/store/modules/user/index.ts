import {GetterTree, ActionTree, MutationTree} from "vuex";
import apiUser from "@/apis/user";
import * as types from './types';

export interface UserState {
  name: string;
  email: string;
}

const state: UserState = {
  name: '',
  email: ''
};

const getters: GetterTree<UserState, UserState> = {
  nameAdd: (state: UserState) => (value: string) => state.name + value
};

const actions: ActionTree<UserState, UserState> = {
  async transformName({ commit }) {
    commit(types.transformName, { name: 'ユーザー名' });
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    commit(types.transformName, { name: 'うせｒ名' });
  },
  async fetchUser({ commit }, token: string) {
    try {
      const { data } = await apiUser.fetchAs(token);
      commit(types.setUser, data[0]);
      return true;
    } catch (error) {
      return false;
    }
  }
};

const mutations: MutationTree<UserState> = {
  transformName(state: UserState, { name }: UserState) {
    state.name = name;
  },
  setUser(state: UserState, { name, email }: UserState) {
    state.name = name;
    state.email = email;
  }
};


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
