import Vue from 'vue';

import mock from './mock/mock';

import router from './router';
import store from './store';
import App from './app.vue';

mock.mock();

new Vue({
    el: '#app',
    store,
    router: router(),
    render: h => h(App)
})
