import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import SearchByLetter from '../views/SearchByLetter.vue'
import SearchByIngredient from '../views/SearchByIngredient.vue'
import SearchByName from '../views/SearchByName.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import MealDetails from '../components/MealDetails.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/home',
                name:'home',
                component: Home,
            },    
            {
                path: '/letter/:letter?',
                name:'byLetter',
                component: SearchByLetter,
            },  
            {
                path: '/ingredient',
                name:'byIngredient',
                component: SearchByIngredient,
            },  
            {
                path: '/name',
                name:'byName',
                component: SearchByName,
            },  
            {
                path: '/meal/:id?',
                name:'mealDetails',
                component: MealDetails,
            },
        ],
    },    
    
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;