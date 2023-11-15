<template>
  <div class="about">
    <h1> Restaurants </h1>
    
    <span id="links">
      
      <router-link  to="/client_dashboard">
        <li>
        Foodies
        </li>
      </router-link>

      <router-link  to="/client_login">
        <li>
        Sign in
        </li>
      </router-link>
      
    </span>
    
      <div v-for="restaurant in restaurants" :key="restaurant.id" id="theplaces">
        <h3>{{ restaurant.name }}</h3>
        <h4>{{ restaurant.address }}</h4>
        <img :src="restaurant.profile_url" alt="Restaurant picture"/>
        <router-link :to="'restaurant?restaurant_id='+ restaurant.restaurant_id">
          <button>Go here</button>
        </router-link>
        
      </div>
  </div>

  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import axios from 'axios';

export default {
  name: 'RestaurantView',
  components: {
   // HelloWorld
  },

  created: function() {
    const headers = {
      "x-api-key":"xldxOub6XfltqnJDAbVl",
      "Content-Type": "application/json"
    }

    const options = {
      headers: headers
    }

    const url = "https://foodie.bymoen.codes/api/restaurants" 

    // URL -> Parameter 1 of the .post function
    // BODY -> Parameter 2 of the .post function
    // OPTINS -> Parameter 2 of the .post function
    axios.get(url,options).then(this.success).catch(this.failure)    
    
    console.log("creating restaurant")
}, 

  data: function() {
  return {
    restaurants: []

  }
},

 methods : {
  success(response) {
      console.log("SUCCESS", response);

      const restaurants = response.data
      
      this.restaurants = restaurants
      console.log(this.restaurants)

    },
  
    failure(response) {
      console.log("FAILURE", response)
    },


 }

}
</script>

<style scoped>
#theplaces {
  margin-top: 50px;
}

button {
  width: 20%;
  color: #555;
  padding: 10px 6px;
  margin: 25px 50px ;
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