import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '@/views/TodoList.vue'
import ComponentPage from '@/views/ComponentPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'singlepage',
      component: TodoList,
    },
    {
      path: '/component',
      name: 'component',
      component:ComponentPage,
    },
  ],
})

export default router
