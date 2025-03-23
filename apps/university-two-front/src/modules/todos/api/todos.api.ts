import httpClient from '@/core/api/http.client'
import type { Pagination } from '@/core/types/pagination.types'
import type { Todo } from '@/modules/todos/types/todo.interface'

const ENDPOINT = 'todos'

export const fetchUsers = async ({ page = 1, limit }: Pagination): Promise<Todo[]> => {
  const response = await httpClient.get<Todo[]>(ENDPOINT, {
    params: { _page: page, _limit: limit },
  })
  return response.data
}
