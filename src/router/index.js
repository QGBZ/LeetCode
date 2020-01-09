import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import TwoSum from "../pages/TwoSum"
import GenerateParentheses from "../pages/GenerateParentheses"

Vue.use(Router);

const router = new Router({

    routes: [
        {path: '/', component: index},
        {path: '/TwoSum', component: TwoSum},
        {path: '/GenerateParentheses', component: GenerateParentheses}
    ]
});
export default router;
