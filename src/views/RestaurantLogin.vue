<template>
  
  <div>
      <div class="restaurantlogin">

        <h1> Restaurant Login / Signup Page </h1> 
  
      </div>   
      
      <div id="links">
        <router-link  to="/restaurant_signup">
            <li>
            To signup as a restaurant click here
            </li>
        </router-link>
      </div>
        
      <div>  
          <form v-on:submit.prevent="restaurantLogin">
            <h3>Login</h3>

            <label>email</label>
            <input v-model="email" type="text"/>   
            <label>password</label>
            <input v-model="password" type="password"/>

            <button type="submit">Log in</button>
          </form>
      </div>
  </div>
</template>

<script>

import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  name: 'RestaurantLogin',
  components: {
   // HelloWorld
  },

  data: function() {
    return {
      email: "",
      password: ""
    }
  },
  
  methods: {
    success(response) {
      console.log("SUCCESS", response)
      if (response.status === 201) {
        VueCookies.set("token", response.data.token)
        VueCookies.set("restaurant_id", response.data.restaurant_id)
        this.$router.push('/restaurant_dashboard')
          }
        },
    
    failure(response) {
      console.log("FAILURE", response)
         },

    restaurantLogin() {
        const body = {
        email: this.email,
        password: this.password
          }
   
        const headers = {
        "x-api-key":"xldxOub6XfltqnJDAbVl",
    
          }
  
        const options = {
        headers: headers
        }


    const url = "https://foodie.bymoen.codes/api/restaurant-login"

    axios.post(url,body,options).then(this.success).catch(this.failure)
    
    }
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
