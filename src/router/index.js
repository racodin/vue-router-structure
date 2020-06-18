import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index.vue'
import NotFound from '@/views/NotFound.vue'
import Home from '@/views/Home.vue'
import Guide from '@/views/Guide.vue'
import User from '@/views/User.vue'
import UserMatch from '@/views/UserMatch.vue'
import UserDetail from '@/views/UserDetail.vue'
import UserMap from '@/views/UserMap.vue'
import Wax from '@/views/Wax.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/guide',
    name: 'Guide',
    component: Guide
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: User,
    redirect: {name: 'UserMatch'},
    // props: (route) => ({ query: route.query.tab }),
    children: [{
      path: '/user/:userId',
      name: "UserMatch",
      component: UserMatch,
    },{
      path: '/user/:userId',
      name: "UserDetail",
      component: UserDetail,
    },{
      path: '/user/:userId',
      name: "UserMap",
      component: UserMap,
    }]
  },
  {
    path: '/wax',
    name: 'Wax',
    component: Wax
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = from.name;
  // console.log("to: ", to);
  // console.log("from: ", from);
  next();
})

export default router
