export const MAIN_API_URL = 'http://localhost:3005';

export const API = {
  baseUrl: 'http://localhost:3005',
  endpoints: {
    wine: {
      data: '/wines',
      myWines: '/wines/my',
      currentWine: '/wines/current/',
      addFavorite: '/wines/favorite/'
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
    label: 'Главная',
    href: '/'
  },
  {
    label: 'Библиотека',
    href: '/new-wine'
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