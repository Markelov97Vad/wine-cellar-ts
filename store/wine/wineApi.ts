"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../utils/constans";
import { Wine } from "../../types/wine.type";


export const getWines = createAsyncThunk<Wine[], undefined, {rejectValue: string}>(
  'wines',
  async function(_, {rejectWithValue}) {
    const response = await fetch(`${API.baseUrl}${API.endpoints.wine.data}`)
    console.log(response);
    
    if (!response.ok) {
      throw rejectWithValue('Не удалось получить список вин');
    }
    return await response.json();
  }
)
// <То что ожидаю вернуть, параметр который передаю, определенные значения конфига>
export const addNewWine = createAsyncThunk<Wine, Wine, {rejectValue: string}>(
  'wines/addWines',
  async function(wine, { rejectWithValue }) {
    
    const response = await fetch(`${API.baseUrl}${API.endpoints.wine.data}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...wine})
    })

    if(!response.ok) {
      return rejectWithValue('Не удалось добавить вино')
    }
    return await response.json() as Wine;

  }
)

export const getCurrentWine = createAsyncThunk<Wine, string, {rejectValue: string}>(
  'wines/getCurrentWine',
  async function(id, { rejectWithValue }) {
    const response = await fetch(`${API.baseUrl}${API.endpoints.wine.data}/${id}`)

    if(!response.ok) {
      return rejectWithValue('Не удалось найти вино')
    }
    return await response.json() as Wine;
  }
)