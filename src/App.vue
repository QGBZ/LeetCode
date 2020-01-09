<template>
    <div>
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/TwoSum">TwoSum</router-link>
        </div>
        <router-view style="margin-top: 10vh"></router-view>
    </div>
</template>

<script>

    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    #nav {
        position: absolute;
      text-align: center;
        top: 5vh;
        left: 45%;
        width: 10%;
        z-index: 2;
    }

    #nav a {
        font-weight: bold;
        color: #4e77ab;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
