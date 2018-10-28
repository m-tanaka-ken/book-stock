export default {
  install() {
    Object.defineProperty(window, 'localStorage', {
      value: {}
    });
  },
  uninstall() {
    // TODO 暫定処理
    // @ts-ignore
    delete window.localStorage;
  }
};
