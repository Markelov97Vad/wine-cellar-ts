export const MAIN_API_URL = 'http://localhost:3005';

export const API = {
  baseUrl: 'http://localhost:3005',
  endpoints: {
    wine: {
      data: '/wines',
    },
    user : {
      register: '/signup',
      login: '/signin'
    }
  }
}