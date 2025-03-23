import httpClient from '@/core/api/http.client'
import type { Pagination } from '@/core/types/pagination.types'
import type { User } from '@/modules/users/types/user.interface'

const ENDPOINT = 'users'

export const fetchUsers = async ({ page = 1, limit }: Pagination): Promise<User[]> => {
  const response = await httpClient.get<User[]>(ENDPOINT, {
    params: { _page: page, _limit: limit },
  })
  return response.data
}
