export const MAIN_API_URL = 'http://localhost:3005';

export const API = {
  baseUrl: 'http://localhost:3005',
  endpoints: {
    wine: {
      data: '/wines',
      myWines: '/wines/my',
      currentWine: '/wines/current/',
      favorite: '/wines/favorite'
    },
    user : {
      register: '/signup',
      login: '/signin',
      auth: '/users/me'
    }
  }
}

export const navItemsHeader = [
  {
    label: 'Библиотека',
    href: '/'
  },
  {
    label: 'Моя коллекция',
    href: '/my-collection'
  }
]

export const navItemAccount = [
  {
    label: 'Мои данные',
    href: '/account/settings',
  },
  {
    label: 'Избранное',
    href: '/account/favorites',
  },
];
