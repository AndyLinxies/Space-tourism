<template>
  <div id="app">
    <div>
      <!-- <Home/> -->
      <!-- Nav -->
      <NavBar />
    </div>
  </div>
</template>

<script>
// import Home from './views/Home.vue'
import store from "../store.js";
import NavBar from './components/NavBar.vue'

export default {
  components: {
    // Home
     NavBar
  },
  data() {
    return {
      destinations: store,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
