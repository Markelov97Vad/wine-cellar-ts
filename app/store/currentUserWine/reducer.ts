import { Wine } from '@/types/wine.type'
import { API } from '@/utils/constans'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const getCurrentUserWines = createApi({
  // уникальный ключ текущего сервиса
  reducerPath: 'userWine',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API.baseUrl}`
  }),
  endpoints: (build) => ({
    // GET запрос //           ответ от сервера, 
    fetchUserWines: build.query<Wine[], string>({
      query: () => ({
        url: `${API.endpoints.wine.myWines}`,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      })
    })
  })
})

export const {useFetchUserWinesQuery} = getCurrentUserWines