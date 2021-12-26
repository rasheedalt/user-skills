import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router =  new VueRouter({
    mode: 'history',
    routes: [
        routes
    ],
    base: process.env.VUE_APP_URL ? process.env.VUE_APP_URL : '/'
})


router.addRoute({ path: "*", name: 'NotFound', component: NotFound })

export default router