import {createRouter, createWebHistory} from 'vue-router';

import Home from "../views/pages/Home.vue"
import Login from "../views/pages/Login.vue"
import Dashboard from "../views/pages/Dashboard.vue"
import Article from "../views/pages/Article.vue"
import NotFound from "../views/pages/NotFound.vue"



const ifAuthenticated = (to, from, next) => {
    const loggedIn = localStorage.getItem('session_token');

    if(loggedIn) {
        next()
        return
    }
    next('/login')
}

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/:pathMatch(.*)*', component: NotFound },
    { path: '/dashboard', component: Dashboard, beforeEnter: ifAuthenticated },
    { path: '/article/:id', component: Article }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;