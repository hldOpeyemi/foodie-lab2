<template>
    <div class="menu">
        <div>
            <h1> Menu Dashboard </h1> 
        </div>

        <div>
            <h1>{{ restaurant.name }}</h1>
            <h1>{{ restaurant.address }}</h1>
        </div>
   

        <div id="links">
            <router-link  to="/restaurant_dashboard">
                <li>
                Restaurant Homepage
                </li>
            </router-link>

            <button>Add to New Menu to List</button>
        </div>


        <article v-for="menuItem in menu" :key="menuItem.id">
            <ul>
            <div id="menulist"> 
                <li>
                    <h5>{{menuItem.name}}</h5>
                    <h5>{{menuItem.description}}</h5>
                    <h5>{{menuItem.price}}</h5>
                    <img :src="menuItem.image_url" alt="Menu_Image" class="images"/>
                    <button v-on:click="">Order</button>
                    
                </li>
            </div>
            </ul>
        </article>


    </div>
</template>

<script>

import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  name: 'Menu',
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

.images {
  width: 200px;
}

article {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}



</style>