<template>
  <div id="container">
    <nav>
      <!-- router-link fungsinya sama dengan a href pada html untuk membuat hyper link antar component 
        bisa juga memanggil menggunakan path dengan perintah to='/' -> nama path nya
       -->
      <router-link :to="{name: 'Home'}">Home</router-link> |
      <router-link :to="{name: 'About'}">About</router-link> |
      <router-link :to="/user/">User</router-link>
    </nav>

    <!-- tempat untuk menyinpan component yang akan di render -->
    <router-view></router-view>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// export default -> option api merupakan style api
export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!--  -->
