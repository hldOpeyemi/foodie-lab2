<template>
  <div class="clientsignup">
    <h1> Client Log in </h1> 
    <form>
      <label>email</label>
      <input type="text"/>   
      <label>password</label>
      <input type="text"/> 
  </form>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'ClientLogin',
  components: {
   // HelloWorld
  }
}
</script>

<style>
h1{
  background-color: rgb(82, 102, 163);
}
</style>

