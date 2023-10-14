import { Wine } from '@/types/wine.type'
import { API } from '@/utils/constans'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const getCurrentUserWines = createApi({
  // уникальный ключ текущего сервиса
  reducerPath: 'userWine',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API.baseUrl}`
  }),
  tagTypes: ['Wine', 'UserWine'],
  endpoints: (build) => ({
    // GET запрос //           ответ от сервера, параметр который передаем
    fetchWines: build.query<Wine[], string>({
      query: () => ({
        url: `${API.endpoints.wine.data}`,
        headers: { 'Content-Type': 'application/json' },
      }),
      providesTags: ['Wine']
    }),
    fetchUserWines: build.query<Wine[], string>({
      query: () => ({
        url: `${API.endpoints.wine.myWines}`,
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      }),
      providesTags: ['UserWine']
    }),
    addFavoriteWine: build.mutation<Wine, string>({
      query: (id: string) => ({
        url: `${API.endpoints.wine.favorite}/${id}`,
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        credentials: 'include'
      }),
      invalidatesTags: ['UserWine', 'Wine']
    }),
    deleteFavoriteWine: build.mutation<Wine, string>({
      query: (id: string) => ({
        url: `${API.endpoints.wine.favorite}/${id}`,
        headers: { 'Content-Type': 'application/json' },
        method: 'DELETE',
        credentials: 'include'
      }),
      invalidatesTags: ['UserWine', 'Wine']
    }),
    getFavoriteWine: build.query({
      query: () => ({
        url: `${API.endpoints.wine.favorite}`,
        credentials: 'include'
      }),
      providesTags: ['UserWine']
    })
  })
})

export const {
  useFetchWinesQuery,
  useFetchUserWinesQuery,
  useLazyFetchUserWinesQuery,
  useAddFavoriteWineMutation,
  useDeleteFavoriteWineMutation,
  useGetFavoriteWineQuery,
  useLazyGetFavoriteWineQuery
} = getCurrentUserWines
