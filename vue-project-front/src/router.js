import { createRouter, createWebHistory } from "vue-router";

function layLoad(view){
    return import(`./views/${view}.vue`)
}

const routes = [{
    path: '/',
    name: 'Home',
    component: layLoad('Home')
},
{
    path: '/sobre',
    name: 'Sobre',
    component: layLoad('Sobre')
},
{
    path:'/fla',
    name: 'Fla',
    component: layLoad('Fla')
}];

const router = createRouter({history: createWebHistory(), routes});


export default router;