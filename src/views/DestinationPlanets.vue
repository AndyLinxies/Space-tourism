<template>
    <div class="flex mt-20  text-left text-white">
        <div class="glog-planetImg">
            <!-- Le @ reviens au src -->
            <img class="planet-img" :src="require(`@/assets/destination/${planet.images.png}`)" alt="planet Image">
        </div>
        <div class="glob-planetText">
            <p class="text-white text-6xl">{{planet.name}}</p>
            <p>{{planet.description}}</p>
        </div>
    </div>
</template>

<script>
//Vu qu'on n'appele ce composant nulle part, impossibilité de passer des props autres que ceux du router-link (id et slug).

//Pour les données du component il faut re-importer le store.js. Ici il n'y a pas de boucle à faire mais un computed à créer et faire un find par rapport à l'id.
//Utiliser ce computed comme un objet pour acceder aux données qu'on veut afficher

import store from '../../store.js'

export default {

name:'DestinationPlanets',
    props:{
        slug: String
    },
    computed: {
        planet(){
            //va faire une sorte de boucle sur destinations et chaque élément de cette "boucle" se nomera planet.
            //Ensuite je lui demande de trouver celui dont le slug de l'élément est égal au slug passé dans la route
            //Le check se fait par rapport au slug ici et non au id.Possibilité de le faire aussi par rapport à celui ci
            return store.destinations.find(planet=>planet.slug==this.slug)
        }
    },
}
</script>

<style>
.glog-planetImg{
    width: 50%
}
.glob-planetText{
    width: 40%
}
.planet-img{
    height: 36vh;
}
.destPlan{
    width: 70%;
    margin-left: 30%;
}
</style>