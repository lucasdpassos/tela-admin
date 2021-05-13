import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue'
import NewUser from '../views/NewUser.vue'
import NewProduct from '../views/NewProduct.vue'
import Reports from '../views/Reports.vue'
import Franqueados from '../views/Franqueados.vue'
import Vendas from '../views/Vendas.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/newuser',
    name: 'NewUser',
    component: NewUser,
  },
  {
    path: '/newproduct',
    name: 'NewProduct',
    component: NewProduct,
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports,
  },
  {
    path: '/franqueados',
    name: 'Franqueados',
    component: Franqueados,
  },
  {
    path: '/vendas',
    name: 'Vendas',
    component: Vendas,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
