<template>
  <div>
    <div id="nav" class="w-full absolute top-0">
      <div class="flex mt-8">
        <div class="left-nav">
        </div>
        <div class="right-nav pt-4 text-center justify-center flex text-white">
          <!-- Une route spécifique pour le Home -->
          <router-link to="/">Home</router-link>
          <!-- Des routes générés avec une boucle pour destination, crew, technologie -->
          <!-- Ne s'affiche pas avant le to="" -->
          <!-- En boucle -->
          <!-- <router-link
            v-for="destination in navElements"
            :key="destination.id"
            :to="{ name: destination.name }"
            >{{ destination.name }}
          </router-link> -->
          <!-- Sans boucle -->
          <router-link to="/destination/moon">Destination</router-link>
          <router-link to="/crew/mark-shuttleworth">Crew</router-link>
          <router-link to="/technology/launch-vehicle">Technology</router-link>
        </div>
      </div>
      <div>
      </div>
    </div>
    <!-- Les effets de transition fonctionnent seulement sur le parent et par ricochet sur l'enfant le name sera considéré comme une classe en css -->
    <transition name="slide" mode="out-in">
    <router-view :key="$route.path"/>
    </transition>

  </div>
</template>

<script>

export default {
  name: "NavBar",
  data() {
    return {
    }
  },
};
</script>
<style>
/* .ecrit{
    color: white
} */
.right-nav {
  background-color: #212936;
  height: 10vh;
  width: 40vw;
  gap: 5%
}
.left-nav{
  width:50%;
  height:5vh;
  border-bottom: solid 1px white;
}
.slide-leave-active,.slide-enter-active{
    transition: opacity 1s, transform 1s
}
.slide-enter,.slide-leave-to{
    opacity: 0;
    transform: translateX(-20%)
}
</style>
