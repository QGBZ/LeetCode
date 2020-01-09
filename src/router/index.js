import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import TwoSum from "../pages/TwoSum"

Vue.use(Router);

const router = new Router({

    routes: [
        {path: '/', component: index},
        {path: '/TwoSum', component: TwoSum}
    ]
});
export default router;
