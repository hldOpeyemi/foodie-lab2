<template>
  <div id="app">
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>
import myHeader from "./components/MyHeader.vue"

export default {
  name: 'App',
  props: {
    //msg: String
  },
  components: {
    "my-header": myHeader
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4d5053;
  
}

body {
  background-color: rgb(122, 99, 48);
 }
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #234064;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
