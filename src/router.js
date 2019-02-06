import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Services from './views/Service'
import About from './views/About'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Services',
            name: 'Services',
            component: Services
        },
        {
            path: '/About',
            name: 'About',
            component: About
        }
    ]
})