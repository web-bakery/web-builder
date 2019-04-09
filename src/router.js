import Vue from 'vue'
import Router from 'vue-router'
import Builder from './views/Builder.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'builder',
      component: Builder
    },
    {
      path: '/settings',
      name: 'settings',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Settings.vue')
    }
  ]
})
