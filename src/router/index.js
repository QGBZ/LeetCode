import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import two from "../pages/two"

Vue.use(Router);

const router = new Router({

    routes: [
        {path: '/', component: index},
        {path: '/two', component: two}
    ]
});
export default router;
