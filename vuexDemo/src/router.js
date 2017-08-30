import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import main from './components/main.vue';
import about from './components/about.vue';
import login from './components/login.vue';

const routes = [
    {
        path: '/',
        component: main
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/login',
        component: login
    }
];

export default () => {
    return new VueRouter({
        routes
    })
}