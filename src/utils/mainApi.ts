import { Wine } from "../types/wine.type";
import { MAIN_API_URL } from "./constans";

const handleResponseCheck = (res: Response) => {
  return res.ok ? res.json() : Promise.reject(res.status)
}

export const createWine = (wine: Wine) => {
  // console.log(wine);
  
  return fetch(`http://localhost:3000/wines`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({...wine})
  })
  .then((res) => {
    console.log(res);
    
    handleResponseCheck(res)
  })
  .catch((err) => console.log(err))
}
export const fet = () => {
  // console.log(wine);
  
  return fetch(`http://localhost:3000/wines`, {
    method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({...wine})
  })
  .then((res) => {
    console.log(res);
    
    handleResponseCheck(res)
  })
  .catch((err) => console.log(err))
}