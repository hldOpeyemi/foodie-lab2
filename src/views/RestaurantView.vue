<template>
  <div class="about">
        <h1> Restaurant </h1>  
        <h3>{{ restaurant["name"] }}</h3>
        <h4>{{ restaurant.address }}</h4>
        <img :src="restaurant.profile_url" alt="Restaurant picture"/>
        <router-link :to="'restaurant?restaurant_id='+ restaurant.restaurant_id"/>       
  </div>

  
</template>

<script>
import axios from 'axios';


export default {
  name: 'RestaurantView',
  components: { 
   // HelloWorld
  },
  
  data: function() {
    return {
      restaurant: {},
      menu: []
    }
  },

  methods: {
    success(response) {
      console.log("SUCCESS", response)
      const restaurant=response.data[0]
      this.restaurant=restaurant
    },
    failure(response) {
      console.log("FAILURE", response)
    },
  },

  created() {

      const restaurant_id = this.$route.query.restaurant_id
      
      const headers = {
      "x-api-key":"xldxOub6XfltqnJDAbVl",
      "Content-Type": "application/json"
    }
        const options = {
        headers: headers
    }

    //console.log(this.$route)
    
    const url = `https://foodie.bymoen.codes/api/restaurant?restaurant_id=${restaurant_id}`

    console.log(restaurant_id)
    // You call axios with the route passing the restuarntan id
    //<div v-for="restaurant in restaurants" :key="restaurant.id" id="theplaces"> v-port is used for an array
    axios.get(url,options).then(this.success).catch(this.failure)
  }
 

}
</script>

<style scoped>



</style>