import { createRouter, createWebHistory } from 'vue-router'
import { TODOS_LIST_ROUTE_NAME, todosModuleRoutes } from '@/modules/todos'

export const routes = [
  {
    path: '/',
    component: () => import('@/core/layouts/dashboard/DashboardLayout.vue'),
    children: [
      /** redirect to model mapping */
      {
        path: '/',
        redirect: {
          name: TODOS_LIST_ROUTE_NAME,
        },
      },
      ...todosModuleRoutes,
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
