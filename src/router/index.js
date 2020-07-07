import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const example = () =>
    import ('../menu_example/example.vue');

const routes = [{
    path: '/',
    component: example
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router