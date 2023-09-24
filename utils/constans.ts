export const MAIN_API_URL = 'http://localhost:3005';

export const API = {
  baseUrl: 'http://localhost:3005',
  endpoints: {
    wine: {
      data: '/wines'
    },
    user : {
      register: '/signup',
      login: '/signin'
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
    href: '/library'
  },
  {
    label: 'Мои вина',
    href: '/my-wines'
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