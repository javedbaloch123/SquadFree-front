import AboutView from "@/view/AboutView.vue";
import AdminView from "@/view/AdminView.vue";
import ContactView from "@/view/ContactView.vue";
import FaqsView from "@/view/FaqsView.vue";
import HomeView from "@/view/HomeView.vue";
import NotFoundView from "@/view/NotFoundView.vue";
import PortfolioView from "@/view/PortfolioView.vue";
import ServicesView from "@/view/ServicesView.vue";
import ServiceView from "@/view/ServiceView.vue";
import SignInView from "@/view/SignInView.vue";
import SignUp from "@/view/SignUp.vue";
import TeamView from "@/view/TeamView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/About',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/Services',
            name: 'services',
            component: ServicesView,
        },
        {
            path: '/Portfolio',
            name: 'portfolio',
            component: PortfolioView,
        },
        {
            path: '/Contact',
            name: 'contact',
            component: ContactView,
        },
        {
            path: '/Team',
            name: 'team',
            component: TeamView,
        },
        {
            path: '/Faqs',
            name: 'faqs',
            component: FaqsView,
        },
        {
            path: '/Service/:id',
            name: 'service',
            component: ServiceView,
        },
         {
            path: '/Admin',
            name: 'admin',
            component: AdminView,
        },
         {
            path: '/Login',
            name: 'login',
            component: SignInView,
        },
          {
            path: '/Register',
            name: 'register',
            component: SignUp,
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView
        },
    ]
})

export default router;