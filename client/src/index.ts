import Vue from 'vue';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import VueMeta from 'vue-meta';
import VueApollo from 'vue-apollo';

import validatorConfig from '@/configs/validator';
import router from '@/routes';
import App from '@/App.vue';
import store from '@/store';
import { metaInfo } from '@/metaInfo';
import { apolloClient } from '@/apollo';

Vue.use(VueRouter);
Vue.use(VeeValidate, validatorConfig);
Vue.use(VueMeta);
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  metaInfo,
  apolloProvider
});
