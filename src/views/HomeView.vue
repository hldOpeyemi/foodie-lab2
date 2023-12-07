<template>
  <div class="home">
    <h1> Foodies Paradise </h1>  
    <div id="div1">
        <div id="divform">
            <div id="formsec">
              <div id="buttons">
                  <button id="button1" class="button">
                  <router-link  to="/client_login">
                  Foodies
                  </router-link>
                  </button>

                  <button id="button2" class="button">
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

#buttons {
  
  width: 100%;
  margin: 25px;
  display: block;  
  background-color: rgb(161, 61, 15);   
  border-radius: 20px;

  
}

#button1 {
  
  width: 55%;
  padding: 20px;
  border-radius: 20px;
  display: inline-block;   
}

#formsec :hover {
  animation: shake 0.5s;
  animation-iteration-count: initial;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }

   
}

#button2 {
  
  width: 55%;
  padding: 20px;
  border-radius: 20px;
  display: inline-block;    
 
}
</style>