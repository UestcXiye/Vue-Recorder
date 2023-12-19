import Vue from 'vue'
import VueRouter from 'vue-router'
import RecorderView from '../views/RecorderView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'recorder',
    component: RecorderView
    // component: () => import('../views/RecorderView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
