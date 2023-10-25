import { AnyAction, ThunkDispatch, createAsyncThunk } from '@reduxjs/toolkit';
import { API, headersData } from '../../../utils/constans';
import { Wine } from '../../../types/wine.type';

export const getCurrentWine = createAsyncThunk<Wine, string, { rejectValue: string }>('wines/getCurrentWine', async function (id, { rejectWithValue }) {
  const response = await fetch(
    `${API.baseUrl}${API.endpoints.wine.currentWine}${id}`,
  );
  try {
    if (!response.ok) {
      return await Promise.reject(new Error(`Status ${response.status}`))
    }
    return (await response.json()) as Wine;

  } catch (error) {
    return rejectWithValue(`Не удалось найти вино ${error}`)
  }
});

type setWineInfoData = {
  _id: string,
  image?: string,
  token: string
}

export const setWineInfo = createAsyncThunk<undefined, setWineInfoData, { rejectValue: string, dispatch: ThunkDispatch<unknown, unknown, AnyAction> }>(
  'wines/setWineInfo', async (data, { rejectWithValue, dispatch }) => {
    const { _id, image, token } = data;
    try {
      const response = await fetch(`${API.baseUrl}${API.endpoints.wine.currentWine}${_id}`, {
        method: "PATCH",
        headers: headersData(token),
        body: JSON.stringify({image})
      })
      if (!response.ok) {
        return await Promise.reject(new Error(`Status ${response.status}`))
      }
      dispatch(getCurrentWine(_id as string));
    } catch(error) {
      return rejectWithValue(`Не удалось обновить данные ${error}`)
    }
  }
)

