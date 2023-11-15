<template>
  <div class="container">
    <div>
      <ul>
        <Strong>

        <router-link  to="/">
          <li>
          Home
          </li>
        </router-link>
                
      </Strong>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    //msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #6c42b9;
}
</style>
