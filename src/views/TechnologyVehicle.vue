<template>
     <div class="flex text-left text-white">
        <div class="glob-crewText">
            <p class="text-white text-6xl">{{technoVehicle.name}}</p>
            <p>{{technoVehicle.description}}</p>
        </div>
        <div class="glog-crewImg">
            <!-- Le @ reviens au src -->
            <img class="crew-img" :src="require(`@/assets/technology/${technoVehicle.images.portrait}`)" alt="tech Image">
            
        </div>
    </div>
</template>

<script>
import store from '../../store.js'

export default {
    name: 'TechnologyVehicle',
    props:{
        slug: String
    },
    computed:{
        technoVehicle(){
            return store.technology.find(tech=>tech.slug==this.slug)
        }
    }
}
</script>
<style>
.glog-crewImg{
    width: 50%
}
.glob-crewText{
    width: 40%
}
.crew-img{
    height: 36vh;
}
</style>