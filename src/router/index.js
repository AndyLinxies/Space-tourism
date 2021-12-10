import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/destination',
    name: 'Destination',
    component: () => import(/* webpackChunkName: "destination" */ '../views/Destination.vue'),

    //Use of Nested Routes with props using
    children:[
      {
        //:suld signifie juste que le props slug passé au router-link se rajoute à la fin de la route destination
        path: ':slug',
        name: 'Planet',
        props: true,
        component: () => import(/* webpackChunkName: "destinationPlanet" */ '../views/DestinationPlanets.vue'),
        
      }
    ],
    //Le beforeEnter se met dans chaque path. Ici on compare par rapport à destination d'où le store.destinations. Pour le crew on comparera par rapport à store.crew etc...
    beforeEnter: (to, from, next) => {
      let exist= store.destinations.find(destination=>destination.slug==to.params.slug)
      if (exist) {
        next()
      } else {
        next({name: 'NotFound'})
      }
    }

  },
  {
    path: '/crew',
    name: 'Crew',
    
    component: () => import(/* webpackChunkName: "crew" */ '../views/Crew.vue'),
    children:[
      {
        path: ':slug',
        name: 'Member',
        props: true,
        component: () => import(/* webpackChunkName: "destinationPlanet" */ '../views/CrewMembers.vue'),
      },
      
    ],
    beforeEnter: (to, from, next) => {
      let exist= store.crew.find(crewMember=>crewMember.slug==to.params.slug)
      if (exist) {
        next()
      } else {
        next({name: 'NotFound'})
      }
    }
    
  },
  {
    path: '/technology',
    name: 'Technology',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "technoloy" */ '../views/Technology.vue'),
    children:[
      {
        path: ':slug',
        name: 'Vehicle',
        props: true,
        component: () => import(/* webpackChunkName: "destinationPlanet" */ '../views/TechnologyVehicle.vue'),
      }
    ],
    //Blocage des routes inexistantes avec un 404 not found
    //Ne fonctionne pas pour les nested Routes
    beforeEnter: (to, from, next) => {
      let exist= store.technology.find(tech=>tech.slug==to.params.slug)
      if (exist) {
        next()
      } else {
        next({name: 'NotFound'})
      }
    }
    
  },
  //Route 404 par defaut. Il en faut 1 seul et il doit etre tout en dernier
  {
    path: '/404',
    alias:'*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "destinationPlanet" */ '../views/404NotFound.vue'),
  }
]

const router = new VueRouter({
  routes
})

export default router
