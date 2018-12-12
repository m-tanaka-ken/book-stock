import apiUser from 'src/apis/user';
import store from 'src/store';

export default {
  async login(email: string, password: string) {
    // TODO 後で調べる
    // @ts-ignore
    if (localStorage.token) {
      return true;
    }
    const { data } = await apiUser.authentication(email, password);
    if (data.length === 0) {
      return false;
    }

    // TODO 後で調べる
    // @ts-ignore
    localStorage.token = data[0].token;
    const payload = data[0];
    store.commit('user/setUser', payload);
    return true;
  },
  logout() {
    // TODO 後で調べる
    // @ts-ignore
    delete localStorage.token;
  },
  loggedIn() {
    // TODO 後で調べる
    // @ts-ignore
    return !!localStorage.token;
  }
};
