<template>
  <div class="container">
    <div>
      <ul>
        <Strong>

        <router-link  to="/">
          <li>
          Home
          </li>
        </router-link>
        
        <router-link  to="/restaurants">
          <li>
          Restaurants
          </li>
        </router-link>
        
        <router-link  to="/client_signup"  >
          <li>
          Signup
          </li>
        </router-link>

        <router-link  to="/client_dashboard">
          <li>
          Client Dashboard
          </li>
        </router-link>
        
      </Strong>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    //msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
