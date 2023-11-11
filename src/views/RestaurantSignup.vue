<template>
  <div class="restaurantsignup">
       <h3>Restuarant Sign Up</h3>
    <form v-on:submit.prevent="validateInput">

        <label>Email</label>
        <input v-model="email" type="text"/>  
    
        <label>Name</label>
        <input v-model="name" type="text"/>
    
        <label>Address</label>
        <input v-model="address" type="text"/>
    
        <label>Phone Number (XXX-XXX-XXXX)</label>
        <input v-model="phone_number" type="text"/>
    
        <label>Bio</label>
        <input v-model="bio" type="text"/>
    
        <label>City</label>
        <select v-model="city" id="select">
          <option value="Toronto">Toronto</option>
          <option value="Vancouver">Vancouver</option>
          <option value="Calgary">Calgary</option>
        </select>

        <label>Profile URL</label>
        <input v-model="profile_url" type="text"/>

        <label>Banner URL</label>
        <input v-model="banner_url" type="text"/>
        
        <label>Create a Password</label>
        <input v-model="password" type="password"/>

        <button type="submit">Submit</button>
    
    </form>
  
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';
import VueCookies from 'vue-cookies';
// import VueRouter from 'vue-router'

export default {
  name: 'RestaurantSignup',
  components: {
   // HelloWorld
  },


data: function() {
  return {
    email: "",
    name: "",
    address: "",
    phone_number: "",
    bio: "",
    city:"",
    profile_url: "",
    banner_url: "",
    password: ""
}

  
},

created: function() {

},

//mounted() {
  //this.$router = this.$router.bind(this)
//},

methods: {
  validateInput(){
    console.log("validating")
    
    if (this.name === "") {
      console.log("Empty name field")
      return
    }
    console.log(this.phone_number.length, this.phone_number)
    if (this.phone_number.length !== 12 || this.phone_number[3] !== "-") {
      console.log("Phone number invalid, correct format is XXX-XXX-XXXX")
      return
    }

    this.signupRestaurant()
  },  
  success(response) {
      console.log(response);
      if (response.status === 201) {
        VueCookies.set("token", response.data.token)
        this.$router.push("/")
      }
    },
  
    failure(response) {
      console.log(response)
    },

  signupRestaurant() {
    // event.preventDefault();
    let body = {
      email: this.email,
      name: this.name,
      address: this.address,
      phone_number: this.phone_number,
      bio: this.bio,
      city: this.city,
      profile_url: this.profile_url,
      banner_url: this.banner_url,
      password: this.password     
    }
     console.log(body)

    const headers = {
      "x-api-key":"xldxOub6XfltqnJDAbVl",
      "Content-Type": "application/json"
    }

    const options = {
      headers: headers
    }

    const url = "https://foodie.bymoen.codes/api/restaurant" 

    // URL -> Parameter 1 of the .post function
    // BODY -> Parameter 2 of the .post function
    // OPTINS -> Parameter 2 of the .post function
    axios.post(url,body,options).then(this.success).catch(this.failure)    

  }

  }

}




</script>

<style>


form {
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

input, select {
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