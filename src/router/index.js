import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Details from '@/pages/details'
import Earth from '@/pages/details/earth'
import Loud from '@/pages/details/loud'
import Car from '@/pages/details/car'
import Hill from '@/pages/details/hill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path:"/details",
      name:"details",
      component:Details,
      redirect:"/details/earth",
      children:[
        {
          name:"earth",
          path:"earth",
          component:Earth
        },
        {
          name:"loud",
          path:"loud",
          component:Loud
        },
        {
          name:"car",
          path:"car",
          component:Car
        },
        {
          name:"hill",
          path:"hill",
          component:Hill
        }
      ]
    }
  ]
})
