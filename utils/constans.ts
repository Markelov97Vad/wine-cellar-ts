export const MAIN_API_URL = 'http://localhost:3005';

export const headersData = {
  "Content-Type": "application/json"
}

export const routeData = [
  { route: '/', text: 'Библиотека' },
  { route: '/my-collection', text: 'Моя коллекция' },
  { route: '/account/settings', text: 'Избранное' },
  { route: '/account/favorites', text: 'Мои данные' },
];


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
      user: '/users/me',
      logout: '/users/signout'
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

export const TypeData = [
  {
    id: 'dry',
    text: 'Cухое',
  },
  {
    id: 'semisweet',
    text: 'Полусладкое',
  },
  {
    id: 'semidry',
    text: 'Полусухое',
  },
  {
    id: 'sweet',
    text: 'Сладкое',
  },
  {
    id: 'dessert',
    text: 'Десертное',
  },
];
export const ColorData = [
  {
    id: 'red',
    text: 'Красное',
  },
  {
    id: 'white',
    text: 'Белое',
  },
  {
    id: 'rose',
    text: 'Розовое',
  },
  {
    id: 'sparkling',
    text: 'Игристое',
  }
];
