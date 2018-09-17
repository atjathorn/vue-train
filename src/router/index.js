import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/Menu'
import Managemenu from '@/components/Managemenu'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      alias: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/menulist',
      component: Managemenu
    }
  ]
})
