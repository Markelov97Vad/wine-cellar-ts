import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserType } from "../../types/user.type";
import { API } from "../../utils/constans";

export const registerUser = createAsyncThunk<UserType, UserType, {rejectValue: string}>(
  'user/register',
  async (data, { rejectWithValue}) => {
    // return Promise.reject(new Error('Ошииииибка'))
    try {
      const response : Response = await fetch(`${API.baseUrl}${API.endpoints.user.register}`, {
        method: 'POST',
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(data)
      });

      console.log('нихуяZZZ', response.ok);
      if (!response.ok) {
        console.log('нихуя');
        return await Promise.reject(new Error(`Status ${response.status}`))
        
      }
      return await response.json() as UserType;
    } catch (err) {
      console.log('Зашел');
      
      return rejectWithValue(`Ошибка при регистрации пользователя ${err}`)
    }
  }
);

export const loginUser = createAsyncThunk<UserType, UserType, {rejectValue: string}>(
  'user/login',
  async (data, { rejectWithValue }) => {
    // console.log(data);
    
    try {
      const response: Response = await fetch(`${API.baseUrl}${API.endpoints.user.login}`,{
        method: 'POST',
        headers: { "Content-Type" : "application/json"},
        body: JSON.stringify(data)
      });
      console.log(response.ok);
      
      if(!response.ok) {
        // console.log(Error);
        
        // return Promise.reject(new Error(`Error ${response.status}`))
        return await Promise.reject(new Error(`Status ${response.status}`))
        // return rejectWithValue(`Ошибка при авторизации пользователя ${response.status}`)
      } 
      return await response.json() as UserType;
    } catch (err) {
      console.log('OUT');
      
      return rejectWithValue(`Ошибка при авторизации пользователя ${err}`)
    }
  }
)