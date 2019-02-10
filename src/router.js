import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Services from './views/Services'
import Contact from './views/Contact'
import QandA from './views/Q&A'

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
          path: '/Q&A',
          name: 'Q&A',
          component: QandA
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact
        }
    ]
})