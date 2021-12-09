<template>
  <div class="techno pt-36">
    <div class="bottom-home mt-64 pl-20">
      <div class="text-space text-white text-left">
        <p class="text-xl">03 SPACE LAUNCH 101</p>
      </div>

      <div class="explore w-full">
        <div class="flex w-full">
          <router-link
            class="pl-5 text-white"
            v-for="techno in technos"
            :key="techno.id"
            :to="{
              name: 'Vehicle',
              params: {
                slug: techno.slug,
              },
            }"
          >
            <!-- Le "bouton rond" -->
            <span class="crew-btn mt-2">{{ techno.id }}</span> <br />
          </router-link>
        <div>
          <router-view :key="$route.path"></router-view>
        </div>
        </div>
        <!-- Les enfanfs -->
      </div>
    </div>
  </div>
</template>

<script>
import store from "../../store";

export default {
  name: "Techology",
  data() {
    return {
      technos: store.technology,
    };
  },
};
</script>
<style scoped>
.techno {
  width: 100%;
  height: 100vh;
  background: url("../assets/technology/background-technology-desktop.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 0;
}
.crew-btn {
  border: solid 1px;
  border-radius: 50%;
  background-color: gray;
  padding-right: 30px;
  padding-left: 30px;
  padding-bottom: 30px;
  padding-top: 30px;
  display: inline-block;
}
</style>
