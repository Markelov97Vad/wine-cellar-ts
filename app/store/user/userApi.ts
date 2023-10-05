'use client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserType } from '../../../types/user.type';
import { API } from '../../../utils/constans';

export const registerUser = createAsyncThunk<
  UserType,
  UserType,
  { rejectValue: string }
>('user/register', async (data, { rejectWithValue }) => {
  // return Promise.reject(new Error('Ошииииибка'))
  try {
    const response: Response = await fetch(
      `${API.baseUrl}${API.endpoints.user.register}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      },
    );
    if (!response.ok) {
      return await Promise.reject(new Error(`Status ${response.status}`));
    }
    return (await response.json()) as UserType;
  } catch (err) {
    return rejectWithValue(`Ошибка при регистрации пользователя ${err}`);
  }
});

export const loginUser = createAsyncThunk<UserType, UserType,{ rejectValue: string }>(
  'user/login',
  async (data, { rejectWithValue }) => {

  try {
    const response: Response = await fetch(
      `${API.baseUrl}${API.endpoints.user.login}`,
      {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      },
    );
    console.log(response.ok);

    if (!response.ok) {
      return await Promise.reject(new Error(`Status ${response.status}`));
    }
    return (await response.json()) as UserType;
  } catch (err) {
    return rejectWithValue(`Ошибка при авторизации пользователя ${err}`);
  }
});

export const checkAuthUser = createAsyncThunk<UserType, undefined, { rejectValue: string}>(
  'use/auth',
  async (_, { rejectWithValue}) => {
    try {
      const response: Response = await fetch(`${API.baseUrl}${API.endpoints.user.auth}`,{
        method: "GET",
        credentials: "include"
      })

      if(!response.ok) {
        return await Promise.reject(new Error(`Status ${response.status}`))
      }

      return (await response.json()) as UserType;
    } catch (error) {
      return rejectWithValue(`Ошибка при аутентификации пользователя ${error}`);
    }
  }
)
