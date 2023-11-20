<template>
  <div>
    <div class="about">
        <h1> Restaurant </h1>  
        <h3>{{ restaurant["name"] }}</h3>
        <h4>{{ restaurant.address }}</h4>
        <img :src="restaurant.profile_url" alt="Restaurant picture" class="images"/>
        <router-link :to="'restaurant?restaurant_id='+ restaurant.restaurant_id"/>  
    </div> 

    <article v-for="menuItem in menu" :key="menuItem.id">
      <h1>{{menuItem.name}}</h1>
      <h1>{{menuItem.description}}</h1>
      <h1>{{menuItem.price}}</h1>
      <img :src="menuItem.image_url" alt="Menu_Image" class="images"/>
      <button v-on:click="addToCart(menuItem)"> Order me!</button>
    </article>

    <router-link  to="/cart">
            <li>
           Cart
            </li>
          </router-link>

  </div>

  
</template>

<script>
import axios from 'axios';
import VueCookies from 'vue-cookies';


export default {
  name: 'RestaurantView',
  components: { 
   // HelloWorld
  },
  
  data: function() {
    return {
      restaurant: {},
      menu: [],
      cart: []
    }
  },

  methods: {
    getRestaurant() {
      const restaurant_id = this.$route.query.restaurant_id
      
      const headers = {
      "x-api-key":"xldxOub6XfltqnJDAbVl",
      "Content-Type": "application/json"
    }
        const options = {
        headers: headers
    }
      
    const url = `https://foodie.bymoen.codes/api/restaurant?restaurant_id=${restaurant_id}`

    //console.log(restaurant_id)

    axios.get(url,options).then(this.success).catch(this.failure)
    },

     success(response) {
      //console.log("SUCCESS", response)
      const restaurant=response.data[0]
      this.restaurant=restaurant
    },
    failure(response) {
      //console.log("FAILURE", response)
    },

    getMenu() {
      const restaurant_id = this.$route.query.restaurant_id
      
      const headers = {
      "x-api-key":"xldxOub6XfltqnJDAbVl",
      "Content-Type": "application/json"
    }
        const options = {
        headers: headers
    }
      
    const url = `https://foodie.bymoen.codes/api/menu?restaurant_id=${restaurant_id}`

    //console.log(restaurant_id)

    axios.get(url,options).then(this.menuSuccess).catch(this.menuFailure)
    },


    menuSuccess(response) {
      //console.log("Menu SUCCESS", response)
      const menu=response.data
      this.menu=menu
    
    },
    menuFailure(response) {
      //console.log("Menu FAILURE", response)
    },

    addToCart(item) {
      
      this.cart.push(item)
      
      VueCookies.set("cart", JSON.stringify(this.cart))
      const cookies = this.$cookies.get("cart")
      console.log(cookies)
    }

  },

  created() {
    this.getMenu()
    this.getRestaurant()
    //console.log(cookies)
  }
 

}
</script>

<style scoped>
.images {
  width: 200px;
}


</style>