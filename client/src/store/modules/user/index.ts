import { ActionTree, MutationTree, Module } from 'vuex';
import apiUser from '../../../apis/user';
import * as types from './types';

export interface UserState {
  name: string;
  email: string;
}

const state: UserState = {
  name: '',
  email: ''
};

const actions: ActionTree<UserState, any> = {
  async fetchUser({ commit }, token: string) {
    try {
      const { data } = await apiUser.fetchBy(token);
      commit(types.setUser, data[0]);
      return true;
    } catch (error) {
      return false;
    }
  }
};

const mutations: MutationTree<UserState> = {
  setUser(state: UserState, { name, email }: UserState) {
    state.name = name;
    state.email = email;
  }
};

const namespaced: boolean = true;

export const user: Module<UserState, any> = {
  namespaced,
  state,
  actions,
  mutations
};
