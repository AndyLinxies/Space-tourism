<template>
  <div class="destination pt-36">
    <div class="bottom-home flex mt-64 pl-20">
      <div class="text-space text-white text-left">
        <p class="text-xl">01 PICK YOUR DESTINATION</p>
      </div>
      <div class="explore">
        <!-- <button class="pl-5 text-white" v-for="destination in destinations" :key="destination.id">{{destination.name }}</button> -->

        <!-- On ne peut pas passer l'objet dans les parametres ici. En fait tout ce qui lui sera passé sera converti en string. On passe généralement le id et le slug. Si on utilise le id on aura /un chiffre. Si on utilise le Slug on aura /lenom  -->
        <router-link  
        :to="{
          name: 'Planet',
          params: {
            id: destination.id,
            slug: destination.slug
            }
        }"
        class="pl-5 text-white"
        v-for="destination in destinations" :key="destination.id"
        >{{destination.name }}</router-link>
      </div>
    </div>
      <!-- Le router-view est la représentation de l'appel du component enfant -->
      <router-view :key="$route.path"></router-view>
    <div>
      <!-- <DestinationPlanets 
      v-for="destination in destinations" 
      :key="destination.id"
      :data="destination"
      /> -->
    </div>
  </div>
</template>

<script>
import store from "../../store";
// import DestinationPlanets from '../views/DestinationPlanets.vue'

export default {
  name: 'Destination',
  components:{
    // DestinationPlanets
  },
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
.destination {
  width: 100%;
  height: 100vh;
  background: url("../assets/destination/background-destination-desktop.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 0;
}
</style>
