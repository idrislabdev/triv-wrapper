import { createWebHistory, createRouter } from "vue-router";
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  },
});


export default router;
