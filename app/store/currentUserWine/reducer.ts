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
    // GET запрос //           ответ от сервера, параметр который передаем
    fetchUserWines: build.query<Wine[], string>({
      query: () => ({
        url: `${API.endpoints.wine.myWines}`,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      })
    }),
    addFavoriteWine: build.mutation<Wine, string>({
      query: (id: string) => ({
        url: `${API.endpoints.wine.addFavorite}${id}`,
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        credentials: 'include'
      })
    }),
    deleteFavoriteWine: build.mutation<Wine, string>({
      query: (id: string) => ({
        url: `${API.endpoints.wine.addFavorite}${id}`,
        headers: { 'Content-Type': 'application/json' },
        method: 'DELETE',
        credentials: 'include'
      })
    })
  })
})

export const {useFetchUserWinesQuery, useAddFavoriteWineMutation, useDeleteFavoriteWineMutation } = getCurrentUserWines