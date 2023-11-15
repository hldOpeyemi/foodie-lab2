<template>
  <div class="home">
    <h1> Foodies Paradise </h1>  
    <div id="div1">
        <div id="divform">
            <div id="formsec">
              <div id="button1">
                  <button>
                  <router-link  to="/restaurants">
                  Foodies
                  </router-link>
                  </button>

                  <button>
                  <router-link  to="/restaurant_login">
                  Restaurant
                  </router-link>
                  </button>
                

            </div>
          </div>
        </div>
    </div>  

  </div>
</template>

<script scoped>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
   // HelloWorld
  }
}
</script>

<style scoped>

divform {
  border-radius: 50px
}


formsec {
  display: grid;
  width: 200px;
  margin-right: 0px;
}

#div1 {
  background-image: url('../assets/images/pexels-sydney-troxell-718742.jpg');
  background: cover;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 800px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: right;
  align-items: right;
  min-height: 80vh;
  border-radius: 50px;
}

#image1 {
  width: 1500px;
  height: 800px;
}

#button1 {
  
  width: 100%;
  margin: 25px;
  display: block;  
  background-color: rgb(161, 61, 15);   
  border-radius: 20px;
  
  

}

#button2 {
  
  width: 80%;
  color: #555;
  padding: 20px;
  
  display: inline-block;       
  

}



</style>