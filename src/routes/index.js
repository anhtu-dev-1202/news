import {route} from '../modules/route';

import Router from 'vue-router'

const router = new Router({
    hashbang: false,
    mode: 'history',
    base: '/',
    fallback: true,
    routes: [
        ...route
    ],
})

export default router