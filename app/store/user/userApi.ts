'use client';
import { AnyAction, ThunkDispatch, createAsyncThunk } from '@reduxjs/toolkit';
import { UserType } from '../../../types/user.type';
import { API, headersData } from '../../../utils/constans';

export const registerUser = createAsyncThunk<
  UserType,
  UserType,
  { rejectValue: string }
>('user/register', async (data, { rejectWithValue }) => {
  try {
    const response: Response = await fetch(
      `${API.baseUrl}${API.endpoints.user.register}`,
      {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data),
      },
    );
    if (!response.ok) {
      return await Promise.reject(new Error(`Status ${response.status}`));
    }
    return (await response.json()) as UserType;
  } catch (err) {
    return rejectWithValue(`${err}`);
  }
});

type ResponseLoginType = {
  newUser: UserType,
  token: string
}

export const loginUser = createAsyncThunk<ResponseLoginType, UserType,{ rejectValue: string }>(
  'user/login',
  async (data, { rejectWithValue }) => {

  try {
    const response: Response = await fetch(
      `${API.baseUrl}${API.endpoints.user.login}`,
      {
        method: 'POST',
        // credentials: 'include',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data),
      },
    );
    if (!response.ok) {
      return await Promise.reject(new Error(`Status ${response.status}`));
    }

    return (await response.json()) as ResponseLoginType;
  } catch (err) {
    return rejectWithValue(`${err}`);
  }
});

export const checkAuthUser = createAsyncThunk<UserType, string, { rejectValue: string}>(
  'user/auth',
  async (token, { rejectWithValue}) => {
    try {
      const response: Response = await fetch(`${API.baseUrl}${API.endpoints.user.user}`,{
        method: "GET",
        credentials: "include",
        headers: headersData(token)
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

export const setUserInfo = createAsyncThunk<UserType, UserType, {rejectValue: string, dispatch: ThunkDispatch<unknown, unknown, AnyAction>}>(
  'user/setInfo',
  async (userData, {rejectWithValue}) => {

    try {
      const response = await fetch(`${API.baseUrl}${API.endpoints.user.user}`, {
        method: "PATCH",
        credentials: 'include',
        headers: headersData(),
        body: JSON.stringify(userData)
      })
      if (!response.ok) {
        return await Promise.reject(new Error(`Status ${response.status}`))
      }
      return response.json() as UserType
    } catch (error) {
      return rejectWithValue(`Ошибка при изменении данных пользователя ${error}`)
    }
  }
)

export const logout = createAsyncThunk<string, string, {rejectValue: string}>(
  'user/logout',
  async (token, {rejectWithValue}) => {
    try {
      const response: Response = await fetch(`${API.baseUrl}${API.endpoints.user.logout}`, {
        method: "POST",
        headers: headersData(token),
      })
      if (!response.ok) {
        return await Promise.reject(new Error(`Status ${response.statusText}`))
      }
      return response.json()
    } catch (error) {
      return rejectWithValue(`Ошибка при попытки выхода из аккаунта ${error}`)
    }
  }
)
