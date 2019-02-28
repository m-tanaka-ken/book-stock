import VueRouter from 'vue-router';
import * as path from 'path';
import auth from './modules/authenticator';
import store from './store';
import Home from './pages/Home.vue';
import Book from './pages/Book.vue';
import Login from './pages/Login.vue';
import NotFound from './pages/error/NotFound.vue';

async function requireAuth(to: any, from: any, next: any) {
  if (!auth.loggedIn()) {
    next({
      path: '/login'
    });
    return;
  }

  // @ts-ignore
  if (
    !store.state.user.length &&
    !(await store.dispatch('user/fetchUser', localStorage.token))
  ) {
    auth.logout();
    next({
      path: '/login'
    });
  }

  next();
}

const router = new VueRouter({
  mode: 'history',
  base: path.resolve(),
  routes: [
    {
      path: '/',
      component: Home,
      beforeEnter: requireAuth
    },
    {
      path: '/books/:id',
      component: Book,
      beforeEnter: requireAuth,
      props: true
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/logout',
      beforeEnter(to, from, next) {
        auth.logout();
        next('/login');
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

export default router;
