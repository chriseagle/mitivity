import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Archive from '../views/Archive.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
