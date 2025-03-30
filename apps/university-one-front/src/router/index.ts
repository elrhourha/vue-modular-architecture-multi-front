import { createRouter, createWebHistory } from 'vue-router'
import { USERS_LIST_ROUTE_NAME, usersModuleRoutes } from '@/modules/users'

export const routes = [
  {
    path: '/',
    component: () => import('@/core/layouts/dashboard/DashboardLayout.vue'),
    children: [
      /** redirect to model mapping */
      {
        path: '/',
        redirect: {
          name: USERS_LIST_ROUTE_NAME,
        },
      },
      ...usersModuleRoutes,
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env?.BASE_URL),
  routes: routes,
})

export default router
