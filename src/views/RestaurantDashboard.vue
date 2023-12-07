<template>
  <div class="home">
    
    <div>
      <h1>{{ restaurant.name }}</h1>
      <h1>{{ restaurant.address }}</h1>
    </div>
    <div></div>
    <div>
        <h1> {{ restaurant.name }} Dashboard </h1>    
    </div>

    <div id="links">
        <router-link  to="/restaurants">
            <li class="router">
              Restaurants
            </li>
        </router-link>

        <router-link  to="/Menu">
            <li class="router">
              Menu
            </li>
        </router-link>

        <router-link  to="/add_dish">
            <li class="router">
              Add New Dish 
            </li>
        </router-link>

     </div>
     
     <div>
      <article v-for="menuItem in menu" :key="menuItem.id">
        
          <div id="menulist"> 
            <ul>
              <li class="menu">

                <h5>{{menuItem.name}}</h5>
                <h5>{{menuItem.description}}</h5>
                <img :src="menuItem.image_url" alt="Menu_Image" class="images"/>
                <button v-on:click="goToDish(menuItem.id)">Edit Dish</button>
                
                
              </li>
            </ul>
           
          </div>
        
      </article>
    </div>
     

  </div>
</template>

<script >

import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  name: 'RestaurantDashboard',
  components: {
   // HelloWorld
  },

  data: function() {
    return {
      restaurant: {},
      menu: [],
     }
  },
  created: function() {
    const token = VueCookies.get("token")
    if (!token) {
      this.$router.push("/")
    }  

    // api => if token legit

    this.getRestaurant()
    this.getMenu()
  }, 

  methods : {
    goToDish(id) {
        console.log(id)
        const restaurant_id = VueCookies.get("restaurant_id")
        this.$router.push(`/edit_dish?menu_id=${id}&restaurant_id=${restaurant_id}`)
        
     },
  
     getRestaurant() {
      const restaurant_id = VueCookies.get("restaurant_id")

      console.log(restaurant_id)
      
      const headers = {
      "x-api-key":"xldxOub6XfltqnJDAbVl",
      "Content-Type": "application/json"
    }
    
    const options = {
        headers: headers
    }
      
    const url = `https://foodie.bymoen.codes/api/restaurant?restaurant_id=${restaurant_id}`

    axios.get(url,options).then(this.success).catch(this.failure)

    },
    success(response) {
      console.log("SUCCESS", response)
      const restaurant=response.data[0]
      this.restaurant=restaurant
    },
    failure(response) {
      console.log("FAILURE", response)
    },
    
    getMenu(){
      console.log("GETTING MENU")
      
      const restaurant_id = VueCookies.get("restaurant_id")
      
      const headers = {
      "x-api-key":"xldxOub6XfltqnJDAbVl",
      "Content-Type": "application/json"
    }
        const options = {
        headers: headers
    }
      
    const url = `https://foodie.bymoen.codes/api/menu?restaurant_id=${restaurant_id}`
    
    axios.get(url,options).then(this.menuSuccess).catch(this.menuFailure)},

    menuSuccess(response) {
      console.log("Menu SUCCESS", response)
      const menu=response.data
      this.menu=menu
    
    },
    menuFailure(response) {
      //console.log("Menu FAILURE", response)
    },



    }

  
}
</script>




<style scoped>


#links {
  display: inline-block;
}

.router {
  display: inline-block;
  padding: 20px;
  margin: 20px;
  border-style: dotted;
  border-color: beige;
  border-radius: 20px;
  color: rgb(77, 67, 86);
  background-color: rgb(215, 183, 152);
}

.images {
  width: 200px;
}

article {
  display: inline-block;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  color: rgb(77, 67, 86);
  background-color: rgb(216, 211, 208);
 
}


</style>