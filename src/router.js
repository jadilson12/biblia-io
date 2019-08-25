import Vue from 'vue'
import Router from 'vue-router'
import About from './views/About'
import Bible from './views/Bible'
import Book from './views/Book'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      component: About,
      meta: {
        title: 'About',
      },
    },
    {
      path: '/',
      component: Bible,
      meta: {
        title: 'home',
      },
    },
    {
      path: '/book/:id',
      component: Book,
      props: true,
      meta: {
        title: 'home',
      },
    },

  ]
})
