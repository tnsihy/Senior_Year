import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'

import ChangeTheme from '@/components/ChangeTheme.vue'
import Transi from '@/components/Transition.vue'
import Layout from '@/components/Layout.vue'
import Container from '@/components/Container.vue'
import Border from '@/components/Border.vue'
import Button from '@/components/Button.vue'
import Radio from '@/components/Radio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/change_theme',
      name: 'ChangeTheme',
      component: ChangeTheme
    }, {
      path: '/transition',
      name: 'Transi',
      component: Transi
    }, {
      path: '/layout',
      name: 'Layout',
      component: Layout
    }, {
      path: '/container',
      name: 'Container',
      component: Container
    }, {
      path: '/border',
      name: 'Border',
      component: Border
    }, {
      path: '/button',
      name: 'Button',
      component: Button
    }, {
      path: '/radio',
      name: 'Radio',
      component: Radio
    }
  ]
})
