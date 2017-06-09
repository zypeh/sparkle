import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Using webpack code splitting here so that each route's associated
// component code is loaded on-demand (lazily) when the route is visited.

// Babel is supported via plugin: `babel-plugin-syntax-dynamic-import`
const HomeView = () => System.import('../views/Home.vue')
//const profileFactory = name => () =>
//  System.import('../views/ProfileFactory').then(m => m.profileFactory(name))
//const DiscoveryView = () => System.import('../views/Discovery.vue')

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    //{ path: '/user', component: profileFactory('user') }, // should be /user/:user_id
    //{ path: '/organization', component: profileFactory('organization') }, // should be /organization/:org_id
    // { path: '/product', component: ProductWindow },
    // { path: '/', component: DiscoveryView },
  ]
})
