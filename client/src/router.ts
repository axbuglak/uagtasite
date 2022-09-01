import { createRouter, createWebHashHistory } from 'vue-router'
import mainPage from './pages/mainPage.vue'
import forumPage from './pages/forumPage.vue'
import shopPage from './pages/shopPage.vue'
import loginPage from './pages/loginPage.vue'
import registerPage from './pages/registerPage.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: mainPage, alias: '/' },
    { path: '/forum', component: forumPage },
    { path: '/shop', component: shopPage },
    { path: '/login', component: loginPage },
    { path: '/register', component: registerPage },
  ],
  linkActiveClass: 'active',
})
