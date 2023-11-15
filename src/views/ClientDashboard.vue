<template>
  <div class="client_dashboard">
    <h1> Foodies Spot </h1>   
    <span id="links">
      <nav>
        <router-link  to="/orders" v-if="userLoggedIn()">
            <li>
           Orders
            </li>
          </router-link>
          
          <router-link  to="/client_login" v-else>
            <li>
            Login
            </li>
          </router-link>

          <router-link  to="/restaurants">
            <li>
            Restaurants
            </li>
          </router-link>

          <router-link  to="/client_signup">
            <li>
            Join Foodies
            </li>
          </router-link>
      </nav>
      </span>
  </div>

</template>

<script >


export default {
  name: 'clientDashboard',
  components: {
   // HelloWorld
  },

methods: {

  userLoggedIn() {
     const token = this.$cookies.get("token")
     if (token) {
      return true
     }
     return false
    },




}

}


</script>




<style scoped>



nav {
  display: inline-block;
}

li {
  display: inline-block;
  padding: 20px;
  margin: 20px;
  border-style: dotted;
  border-color: beige;
  border-radius: 20px;
  color: rgb(77, 67, 86);
  background-color: rgb(215, 183, 152);
}

</style>