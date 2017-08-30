<template>
    <div>
        <form>
            <label for="email">email:</label>
            <input type="email" name="email" v-model="email">
            <label for="password">password:</label>
            <input type="password" name="password" v-model="password">
            <button v-on:click="loginSubmit">login</button>
        </form>
    </div>
</template>
<style>

</style>
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            email: 'donnie',
            password: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        async loginSubmit() {
            const { email, password } = this;
            const res = await this.login({ email, password });
            if (res.data.status === 'ok') {
                console.log('login is ok')
            }
        }
    }
}
</script>
