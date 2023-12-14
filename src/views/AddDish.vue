<template>
  <div>
    <div class="add_dish">
      <h1> Add Dish </h1>    
    </div>
    <h1 v-if="message">{{ message }}</h1>
    <div id="form">
      <label>Name</label>
      <input v-model="dish.name" type="text" />

      <label>Price</label>
      <input v-model="dish.price" type="text" />

      <label>Description</label>
      <input v-model="dish.description" type="text" />

      <label>Picture url</label>
      <input v-model="dish.image_url" type="text" />
      <button v-on:click="addDish">Save</button>
    </div>
  </div>
</template>

<script >

import axios from 'axios';
import VueCookies from 'vue-cookies';

export default {
  name: 'AddDish',
  components: {
   // HelloWorld
  },


  data() {
    return {
      dish:{},
      message: false
      
    }

  },


  methods: {
    addDish() {
      const token = VueCookies.get("token")
      const restaurant_id = VueCookies.get("restaurant_id")
      
      console.log('clicking')
      



      const headers = {
        "x-api-key": "xldxOub6XfltqnJDAbVl",
        "Content-Type": "application/json",
        "token": token
      }


      const body = {
        "description": this.dish.description,
        "name": this.dish.name,
        "price": this.dish.price,
        "image_url": this.dish.image_url
      }
      console.log(body)

      const options = {
        headers: headers
      }

      const url = `https://foodie.bymoen.codes/api/menu?restaurant_id=${restaurant_id}`

      axios.post(url,body,options).then(this.success).catch(this.failure)
    },
    success(response) {
      console.log("success", response)
      this.message = "Your Dish was Added"
      this.dish = {}
    },
    failure(response) {
      console.log("failure", response)
      this.message = "Dish not Added"
  }
 
  },

}
</script>




<style scoped>

body {
  background-color: rgb(138, 128, 128);
  
}

#form {
  max-width: 500px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  color: #555;
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: #aaa;
  border-bottom: 1px solid #ddd;
}
button {
  width: 50%;
  color: #555;
  padding: 10px 6px;
  margin: 25px 50px 15px;
  display: inline-block;

}


</style>
  