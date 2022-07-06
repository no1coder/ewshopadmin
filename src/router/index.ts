import { createRouter,createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/login/index.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
]

export const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})
