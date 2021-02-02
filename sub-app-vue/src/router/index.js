import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home'
import HelloWorld from "../components/HelloWorld";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/helloword',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];
export default routes;
