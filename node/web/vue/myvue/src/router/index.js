import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/Content.vue'
import Main from '../components/Main.vue'


Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            name: 'content',
            path: '/content',
            component: Content
        },
        {
            name: 'main',
            path: '/main',
            component: Main
        }
    ]
});