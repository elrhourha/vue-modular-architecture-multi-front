import { type RouteRecordRaw } from 'vue-router'

export const TODOS_LIST_ROUTE_NAME = 'todos-home'

const todosRoutes: RouteRecordRaw[] = [
  {
    path: '/todos',
    component: () => import('@/modules/todos/TodoModuleRoot.vue'),
    children: [
      {
        path: '',
        name: TODOS_LIST_ROUTE_NAME,
        component: () => import('@/modules/todos/views/TodosList/TodosList.vue'),
      },
    ],
  },
]

export default todosRoutes
