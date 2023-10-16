import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, headersData } from '../../../utils/constans';
import { Wine } from '../../../types/wine.type';

// export const getWines = createAsyncThunk<
//   Wine[],
//   undefined,
//   { rejectValue: string }
// >('wines', async function (_, { rejectWithValue }) {
//   const response = await fetch(`${API.baseUrl}${API.endpoints.wine.data}`);

//   if (!response.ok) {
//     throw rejectWithValue('Не удалось получить список вин');
//   }
//   return await response.json();
// });
// <То что ожидаю вернуть, параметр который передаю, определенные значения конфига>
// export const addNewWine = createAsyncThunk<Wine, Wine, { rejectValue: string }>(
//   'wines/addWines',
//   async function (wine, { rejectWithValue }) {
//     try {

//       if (wine.image === '') {
//         wine.image = 'https://p0.pxfuel.com/preview/569/587/724/bottle-wine-red-drink.jpg'
//       }

//       const response = await fetch(`${API.baseUrl}${API.endpoints.wine.data}`, {
//         method: 'POST',
//         credentials: 'include',
//         headers: headersData,
//         body: JSON.stringify({ ...wine }),
//       });

//       if (!response.ok) {
//         return rejectWithValue('Не удалось добавить вино');
//       }
//       return (await response.json()) as Wine;
//     } catch (err) {
//       return rejectWithValue(`Не удалось добавить вино ${err}`);
//     }
//   },
// );

export const getCurrentWine = createAsyncThunk<
  Wine,
  string,
  { rejectValue: string }
>('wines/getCurrentWine', async function (id, { rejectWithValue }) {
  const response = await fetch(
    `${API.baseUrl}${API.endpoints.wine.currentWine}${id}`,
  );

  if (!response.ok) {
    return rejectWithValue('Не удалось найти вино');
  }
  return (await response.json()) as Wine;
});

