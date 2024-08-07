import { createRouter, createWebHistory } from "vue-router";

function layLoad(view){
    return import(`./components/${view}.vue`)
}

const routes = [{
    path: '/',
    name: 'Home',
    component: layLoad('Home')
},
{
    path: '/cadastro',
    name: 'Cadastro',
    component: layLoad('FormCad')
},
{
    path: '/clientes',
    name: 'TabClientes',
    component: layLoad('TabClientes')
}];

const router = createRouter({history: createWebHistory(), routes});


export default router;