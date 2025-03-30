import { type RouteRecordRaw } from 'vue-router'

export const USERS_LIST_ROUTE_NAME = 'users-home'
export const USERS_LIST_ROUTE_PATH = '/users'

const usersRoutes: RouteRecordRaw[] = [
  {
    path: USERS_LIST_ROUTE_PATH,
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
