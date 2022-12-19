import Main from '@/pages/Main.vue';
import Basket from '@/pages/Basket.vue';
import ProductDetails from '@/pages/ProductDetails.vue';
import Tamirlan from '@/pages/Tamirlan.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        meta: {
            auth: true
        }
    },
    {
        path: '/basket',
        name: 'Busket',
        component: Basket,
        props: true,
        meta: {
            auth: true
        }
    },
    {
        path: '/product/:id',
        name: 'productDetails',
        component: ProductDetails,
        props: true,
        meta: {
            auth: true
        }
    },
    {
        path: '/tamirlan',
        name: 'tamirlan',
        component: Tamirlan
    }
] ;

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;