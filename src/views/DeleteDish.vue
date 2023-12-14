<template>
  <div>
      <div class="del_dish">
        <h1> Delete Dish </h1>    
      </div>
  <div>
      <table border="1px">
          <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Description</td>  
              <td>Image</td> 
              <td>Menu ID</td>
              <td>Action</td>
          </tr>

          <tr v-for ="dish in menu" v-bind:key="dish.id">
              <td>{{dish.name}}</td>
              <td>{{dish.price}}</td>
              <td>{{dish.description}}</td>
              <td><img :src="dish.image_url" width="200px"/></td>
              <td>{{dish.id}}</td>
               <td><button v-on:click="deleteDish(dish.id)">Delete</button></td>
          </tr>

      </table>

  </div>
        
</div>
</template>

<script >

import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
name: 'DeleteDish',
components: {
 // HelloWorld
},


data() {
  return {
    menu:null,
    menuId:null
    
  }

},

created() {
  this.setPage()
},

methods: {
  
  setPage() {
    const restaurantId = VueCookies.get("restaurant_id")
    this.getMenu(restaurantId)
  
  },

  
  getMenu: function (restaurant_id) {   
    // console.log("GETTING MENU")

    const headers = {
      "x-api-key": "xldxOub6XfltqnJDAbVl",
      "Content-Type": "application/json"
    }
    const options = {
      headers: headers
    }

    const url = `https://foodie.bymoen.codes/api/menu?restaurant_id=${restaurant_id}`

    axios.get(url, options).then(this.menuSuccess).catch(this.menuFailure)

  },

  menuSuccess(response) {
    // console.log("Menu SUCCESS", response)
    const menu = response.data
    // // const dish = menu.find(dish => {
    // //   console.log(dish.id,)
    // })
 
    //  console.log(menu)

     this.menu = menu


  },

  menuFailure(response) {
    console.log("Menu FAILURE", response)
  },


  deleteDish(dish_id) {

    console.log(dish_id)

    const token = VueCookies.get("token")
    const restaurant_id = VueCookies.get("restaurant_id")

    const headers = {
      "x-api-key": "xldxOub6XfltqnJDAbVl",
      "Content-Type": "application/json",
      "token": token
    }

    const body = {
      "menu_id": dish_id
    }

      
    // console.log(options, body)
 


    const url = `https://foodie.bymoen.codes/api/menu?restaurant_id=${restaurant_id}`
    console.log(url)


      axios.delete(url, {headers: headers, data: body }).then(this.dishSuccess).catch(this.dishFailure)



  },

  dishSuccess(response) {
    console.log("dish SUCCESS", response)
    this.setPage()
  },

  dishFailureFailure(response) {
    console.log("dish FAILURE", response)
  },


  },

}



</script>




<style scoped>

body {
background-color: rgb(138, 128, 128);

}


</style>
