<template>
  <!-- Un Component Séparé pour le homme et 1 Seul component pour destination crew et technologies  -->
  <div class="home pt-40">
    <p>home page</p>
    <div class="bottom-home flex mt-64 pl-20">
      <div class="text-space text-white text-left">
        <p>SO YOU WANT TO TRAVEL TO</p>
        <p class="text-9xl">SPACE</p>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div class="explore">
          <div class="bg-white af-ex mt-10">
            <p class="font-bold">EXPLORE</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style>
.home {
  /* background-image: url('../assets/home/background-home-desktop.jpg'); */
  /* height: 100vh; */
  width: 100%;
  height: 100vh;
  background: url("../assets/home/background-home-desktop.jpg") no-repeat center
    center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  z-index: 0;
}
.text-space{
width: 35%
}
.explore{
  width:50%
}
.af-ex{
  width:27%;
  height: 23vh;
  border-radius: 50%;
  padding-top: 12%;
  margin-left: 35%;
}
</style>
