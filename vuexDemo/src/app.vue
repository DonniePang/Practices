<template>
    <div id="app">
        <h1>Home,hello Vue!</h1>
        <p>
            <router-link to="/">main</router-link>
            <router-link to="/about">about</router-link>
            <router-link to="/login">login</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<style>
#app {
    /* display: flex; */
    color: blueviolet
}
</style>