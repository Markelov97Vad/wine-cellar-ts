import { Wine } from "../types/wine.type";
import { MAIN_API_URL } from "./constans";

const handleResponseCheck = (res: Response) => {
  return res.ok ? res.json() : Promise.reject(res.status)
}

export const createWine = (wine: Wine) => {
  return fetch(`${MAIN_API_URL}/wines`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...wine})
  })
  .then((res) => {
    return handleResponseCheck(res)
  })
  .catch((err) => console.log(err))
}

export const getAllWines = () => {
  return fetch(`${MAIN_API_URL}/wines`, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
      return handleResponseCheck(res)
  })
  .catch(err => {
    console.log(err);
  })
}