<template>
  <div class="crew pt-36">
      <div>
    <div class="bottom-home mt-64 pl-20">
    <div class="text-space text-white text-left">
        <p class="text-xl">02 MEET YOUR CREW</p>
      </div>

      <router-view :key="$route.path"></router-view>

      <div class="explore">
        <router-link 
        class="pl-5 text-white"
        v-for="crew in crews" :key="crew.id"
        :to="{name: 'Member', 
        params:{
            slug: crew.slug
        }
        }"
        >
        <span class="crew-btn"></span>
        </router-link>
      </div>
    </div>
      <!-- Le router-view est la représentation de l'appel du component enfant -->
      </div>
  </div>
</template>


<script>
import store from '../../store.js'

export default {
    name: "Crew",
    data() {
        return {
            crews: store.crew
        }
    },
};
</script>

<style>
.crew {
  width: 100%;
  height: 100vh;
  background: url("../assets/crew/background-crew-desktop.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 0;
}
.crew-btn{
    border: solid 1px;
    border-radius: 50%;
    background-color: gray;
    padding-right: 5px;
    padding-left: 5px;
}

</style>
