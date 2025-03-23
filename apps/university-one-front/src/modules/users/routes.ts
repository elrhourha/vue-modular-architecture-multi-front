import { type RouteRecordRaw } from 'vue-router'

export const USERS_LIST_ROUTE_NAME = 'users-home'

const usersRoutes: RouteRecordRaw[] = [
  {
    path: '/users',
    component: () => import('@/modules/users/UserModuleRoot.vue'),
    children: [
      {
        path: '',
        name: USERS_LIST_ROUTE_NAME,
        component: () => import('@/modules/users/views/UsersList/UsersList.vue'),
      },
    ],
  },
]

export default usersRoutes
