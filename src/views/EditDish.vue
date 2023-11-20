<template>
  <div class="clientsignup">
    <h3>Edit Dish</h3>
    <img width="400px" :src="dish.image_url" alt="Menu_Image" class="images" />
    <div>

      <label>Name</label>
      <input v-model="dish.name" type="text" />

      <label>Price</label>
      <input v-model="dish.price" type="text" />

      <label>Description</label>
      <input v-model="dish.description" type="text" />

      <label>Picture url</label>
      <input v-model="dish.image_url" type="text" />
      <button v-on:click="saveChange">Save</button>
      <button v-on:click="deleteDish">Delete</button>
    </div>

  </div>
  <!-- <div>

    <div class="home">

      <h1> Edit Dish </h1>

    </div>

    


  </div> -->
</template>

<script >
import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  name: 'EditDish',
  components: {
    // HelloWorld
  },

  created() {
    this.setPage()
  },

  methods: {
    saveChange() {
      console.log("saving this")
      this.patchDish()
    },
    setPage() {
      console.log(this.$route.query)
      const menuId = this.$route.query.menu_id
      this.menuId = menuId
      const restaurantId = this.$route.query.restaurant_id
      this.getMenu(restaurantId)
    },


    patchDish() {
      // DO THE AXIOS LOGISH with the this.dash
      console.log(this.dish, this.originalDish)
      if (JSON.stringify(this.dish) === JSON.stringify(this.originalDish)) {
        console.log("Sorry, you need to at least change something");
        return
      }

      const token = VueCookies.get("token")

      const headers = {
        "x-api-key": "xldxOub6XfltqnJDAbVl",
        "Content-Type": "application/json",
        "token": token
      }


      const body = {
        "menu_id": this.dish.id,
        "description": this.dish.description,
        "name": this.dish.name,
        "price": this.dish.price,
        "image_url": this.dish.image_url
      }

    
      console.log(this.dish)
      
    
      console.log(this.dish)

      const options = {
        headers: headers
      }

      const url = `https://foodie.bymoen.codes/api/menu`

      axios.patch(url,body,options).then(this.patchDishSuccess).catch(this.patchDishFailure)
    },
    patchDishSuccess(response) {
      console.log("Patch SUCCESS", response)
      this.setPage()
    },

    menuFailure(response) {
      console.log("Patch FAILURE", response)
    },

    deleteDish() {
      // DO THE AXIOS DELETE with the this.dash

      const token = VueCookies.get("token")

      const headers = {
        "x-api-key": "xldxOub6XfltqnJDAbVl",
        "Content-Type": "application/json",
        "token": token
      }

      const body = {
        "menu_id": this.dish.id
      }

      const options = {
        headers: headers
      }

      const url = `https://foodie.bymoen.codes/api/menu`

      axios.delete(url, body, options).then(this.dishSuccess).catch(this.dishFailure)
    },

    dishSuccess(response) {
      console.log("dish SUCCESS", response)
    },

    dishFailureFailure(response) {
      console.log("dish FAILURE", response)
    },


    getMenu: function (restaurant_id) {
      console.log("GETTING MENU")

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
      console.log("Menu SUCCESS", response)
      const menu = response.data
      const dish = menu.find(dish => {
        console.log(dish.id, this.menuId)
        if (dish.id == this.menuId) {

          return dish
        }
      })
      this.originalDish = {...dish}
      this.dish = dish


    },

    menuFailure(response) {
      //console.log("Menu FAILURE", response)
    },



  },
  data() {
    return {
      dish: false,
      originalDish: false,
      menuId: false
    }

  },

}


</script>




<style scoped>
body {
  background-color: rgb(138, 128, 128);

}
</style>