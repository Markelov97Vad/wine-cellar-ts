import { Wine } from '@/types/wine.type'
import { API, headersData } from '@/utils/constans'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

type Data = {
  id: string;
  token: string;
}

type DataWine = {
  wine: Wine,
  token: string
}

export const WinesQuery = createApi({
  // уникальный ключ текущего сервиса
  reducerPath: 'userWine',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API.baseUrl}`
  }),
  tagTypes: ['Wine', 'UserWine'],
  endpoints: (build) => ({
    // GET запрос //           ответ от сервера, параметр который передаем
    fetchWines: build.query<Wine[], string>({
      query: (_) => ({
        url: `${API.endpoints.wine.data}`,
        headers: headersData(),
      }),
      providesTags: ['Wine']
    }),
    fetchUserWines: build.query<Wine[], string>({
      query: (token) => ({
        url: `${API.endpoints.wine.myWines}`,
        headers: headersData(token),
      }),
      providesTags: ['UserWine']
    }),
    addFavoriteWine: build.mutation<Wine, Data>({
      query: (data) => ({
        url: `${API.endpoints.wine.favorite}/${data.id}`,
        headers: headersData(data.token),
        method: 'PUT'
      }),
      invalidatesTags: ['UserWine', 'Wine']
    }),
    deleteFavoriteWine: build.mutation<Wine, Data>({
      query: (data) => ({
        url: `${API.endpoints.wine.favorite}/${data.id}`,
        headers: headersData(data.token),
        method: 'DELETE',
      }),
      invalidatesTags: ['UserWine', 'Wine']
    }),
    getFavoriteWine: build.query<Wine[], string>({
      query: (token) => ({
        url: `${API.endpoints.wine.favorite}`,
        headers: headersData(token)
      }),
      providesTags: ['UserWine']
    }),
    deleteWine: build.mutation<Wine[], Data>({
      query: (data) => ({
        url: `${API.endpoints.wine.data}/${data.id}`,
        method: "DELETE",
        headers: headersData(data.token),
      }),
      invalidatesTags: ['Wine', 'UserWine']
    }),
    addNewWine: build.mutation<Wine, DataWine>({
      query: (data) => ({
        url: `${API.endpoints.wine.data}`,
        method: 'POST',
        headers: headersData(data.token),
        body: JSON.stringify(data.wine)
      }),
      invalidatesTags: ['UserWine', 'Wine']
    })
  })
})

export const {
  useFetchWinesQuery,
  useLazyFetchWinesQuery,
  useFetchUserWinesQuery,
  useLazyFetchUserWinesQuery,
  useAddFavoriteWineMutation,
  useDeleteFavoriteWineMutation,
  useGetFavoriteWineQuery,
  useLazyGetFavoriteWineQuery,
  useDeleteWineMutation,
  useAddNewWineMutation
} = WinesQuery
