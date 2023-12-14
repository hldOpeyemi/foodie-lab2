<template>
  <div>
    <div>
      <img :src="restaurant.profile_url" alt="Restaurant picture" class="images"/>
    </div>
    
    

    <div class="about">
        <h1>{{ restaurant["name"] }}</h1>
        <h3>{{ restaurant.address }}</h3>
        <router-link :to="'restaurant?restaurant_id='+ restaurant.restaurant_id"/>  
    </div> 
    
    <div id="cart">
      <h3 class="main-title">Choose Order</h3>
      <router-link  to="/cart"> <h3>Cart</h3> </router-link>
    </div>

    <div v-for="menuItem in menu" :key="menuItem.id" id="menuholder">
      <ul>
          <li class="menulist">
            <div id="menu-desc">
              <img :src="menuItem.image_url" alt="Menu_Image" id="dishimage"/>          
              <h1 class="menuname">{{menuItem.name}}</h1>
              <h3>{{menuItem.description}}</h3>
              <h1>${{menuItem.price}}.00</h1>
              <button v-on:click="addToCart(menuItem)"> Click to Order</button>
              
            </div>
          </li>

      </ul>
     
  
    </div>
  

    

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
    },


  },

  created() {
    this.getMenu()
    this.getRestaurant()
    //console.log(cookies)
  }
 

}
</script>

<style scoped>

#menuholder {
  margin-top: 20px;
  display: inline-block;
}

.menulist {
  display: grid;
  padding: 20px;
  width: 400px;
  height: 600px;
  margin: 20px;
  border-radius: 20px;
  color: rgb(77, 67, 86);
  background-color: rgb(216, 211, 208);
}

#dishimage {
  width: 200px;
  height: 200px

}

/* .menuwrapper {
  display: inline-block;
  width: 30%;
  margin-top: 1rem;
  gap: 2%;
  border-radius: 8px;
}

#menudetails {
  min-height: 200px;
  height: 100%;
  background-color: aqua;
  border-radius: 8px;
  margin: 1% 0;
  box-sizing: green 0px 2px 8px 0px;
  cursor: pointer;
}

#dishimage {
  width: 20%;
  height:180px;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
  filter:brightness(0.8)
}

/* #menu-description {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 3%;
  width: 100%
} */

.images {
  width: 200px
}

/* #menu-name {
  display: grid;
} */

</style>