<template>
  <div class="about">
    <h1> Restaurants </h1>
    <div> 
      <span id="links">
         <router-link  to="/client_dashboard">
           <li class="router">
              Foodies
           </li>
        </router-link>

        <router-link  to="/client_login">
            <li class="router">
              Sign in
            </li>
        </router-link>
      </span>
    </div>
    
      <div v-for="restaurant in restaurants" :key="restaurant.id" id="theplaces">
        <ul>
          <li class="restaurants">
              <h3>{{ restaurant.name }}</h3>
              <h4>{{ restaurant.address }}</h4>
              <img :src="restaurant.profile_url" alt="Restaurant picture"/>
              <router-link :to="'restaurant?restaurant_id='+ restaurant.restaurant_id">
                <button>Go here</button>
              </router-link>
          </li>
        </ul>
        
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

      function checkRestaurant(restaurant) {
        console.log(restaurant.name )
        return restaurant.name !== "dkaslkkd";
      }

      // With normal syntax
      // const filterRestaurants = restaurants.filter(checkRestaurant)

      const filterRestaurants = restaurants.filter((restaurant) => {
        return restaurant.name !== "dkaslkkd";
      })

      this.restaurants = filterRestaurants
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
  margin-top: 20px;
  display: inline-block;
}


img {
  width: 300px;
  height: 200px
}

button {
  width: 20%;
  color: #555;
  padding: 10px 6px;
  margin: 25px 50px ;
}

.router {
  display: inline-block;
  padding: 20px;
  margin: 20px;
  border-style: dotted;
  border-color: beige;
  border-radius: 20px;
  color: rgb(77, 67, 86);
  background-color: rgb(179, 173, 167);
}

.restaurants {
  display: inline-block;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
  color: rgb(77, 67, 86);
  background-color: rgb(216, 211, 208);
}

</style>