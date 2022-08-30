import { createRouter, createWebHashHistory } from 'vue-router'
import mainPage from './pages/mainPage.vue'
import forumPage from './pages/forumPage.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: mainPage, alias: '/' },
    { path: '/forum', component: forumPage }
  ],
  linkActiveClass: 'active',
})
