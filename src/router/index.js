import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    ]
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
      }
    ]
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
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
