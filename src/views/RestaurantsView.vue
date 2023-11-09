<template>
  <div class="about">
    <h1> Restaurants </h1>  
    
      <div v-for="restaurant in restaurants" :key="restaurant.id" id="theplaces">
        <h3>{{ restaurant.name }}</h3>
        <h4>{{ restaurant.address }}</h4>
        <button>Go here</button>
      </div>
  </div>

  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import axios from 'axios';

export default {
  name: 'AboutView',
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


</style>