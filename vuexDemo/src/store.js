import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
    userName: 'Don',
    isLogin: false
}

const getters = {
    userName: state => state.userName,
    isLogin: state => state.isLogin
}

const mutations = {
    userName(state, value) {
        state.userName = value
    },
    isLogin(state, value) {
        state.isLogin = value
    }
}

const actions = {
    login({
        commit
    }, {
        email,
        password
    }) {
        return new Promise((resolve, reject) => {
            console.log('new promise')
            setTimeout(
                async() => {
                    const data = await axios.get('/api.json');
                    console.log(data);
                    if (data.data.status === 'ok') {
                        commit('userName', data.data.userName);
                        commit('isLogin', true);
                        resolve(data);
                    } else {
                        reject()
                    }
                }, 1000);
        })
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})