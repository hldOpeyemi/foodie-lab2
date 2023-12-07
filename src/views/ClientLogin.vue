<template>
  <div class="clientlogin">
    <h1> Client Log in </h1> 

    <div id="links">
        <router-link  to="/client_signup">
            <li>
            To signup as a foodie click here
            </li>
        </router-link>
      </div>
       
    <form v-on:submit.prevent="clientLogin">
      <label>email</label>
      <input v-model="email" type="text"/>   
      <label>password</label>
      <input v-model="password" type="password"/>

      <button type="submit">Log in</button>
 
  </form>
  </div>
</template>

<script>

import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  name: 'ClientLogin',
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
        this.$router.push("/restaurants")
          }
        },
    
    failure(response) {
      console.log("FAILURE", response)
         },

    clientLogin() {
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


    const url = "https://foodie.bymoen.codes/api/client-login"

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

