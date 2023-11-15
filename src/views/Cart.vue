<template>
  <div class="client_dashboard">
    <h1> Cart </h1>
    <span id="links">
      <nav>
        <router-link to="/orders">
          <li>
            Orders
          </li>
        </router-link>

        <router-link to="/restaurants">
          <li>
            Restaurants
          </li>
        </router-link>
      </nav>
    </span>
    <div>


      <article class="row-container" v-for="item in cart" :key="item.id">
        <div class="cart-item">
          <div>

            <h1>{{ item.name }}</h1>
            <h1>$ {{ item.price }}.00</h1>
          </div>
          <img :src="item.image_url" alt="Menu_Image" class="images" />
          <!-- <button v-on:click="addToCart(menuItem)"> Order me!</button> -->
        </div>
      </article>

    </div>
  </div>
</template>

<script >
import VueCookies from 'vue-cookies';

export default {
  name: 'Cart',
  components: {
    // HelloWorld
  },

  // () => {  console.log("Hello") }
  // function() { console.log("hello") }

  data: () => {
    return {
      cart: []
    }
  },

  created() {

    const userCart = VueCookies.get("cart")

    this.cart = userCart;
    console.log(this.cart)
  },

  methods: {





  }

}


</script>




<style scoped>
nav {
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

.row-container {
  display: flex;
  display: column;
  justify-content: center;
  outline: 2px solid green;
}

.cart-item {
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}



.images {
  height: 200px;
}
</style>