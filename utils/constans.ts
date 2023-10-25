export const MAIN_API_URL = 'http://localhost:3005';
// export const MAIN_API_URL = 'https://api-my-wine-cellar.space';

export const headersData = (token: string) => {
  return {
    'Content-type': 'application/json; charset=UTF-8',
    'Authorization': `Bearer ${token}`
  }
}

export const routeData = [
  { route: '/', text: 'Главная' },
  { route: '/my-collection', text: 'Моя коллекция' },
  { route: '/account/favorites', text: 'Избранное' },
  { route: '/account/settings', text: 'Мои данные' },
];


export const API = {
  baseUrl: MAIN_API_URL,
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
    label: 'Главная',
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
    text: 'Сухое',
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

export const SCREEN_TABLET = 635;
export const SCREEN_LAPTOP = 768;

export const SESSION_STORAGE_LIBRARY_SEARCH = 'librarySearchValue'
export const SESSION_STORAGE_MYCOLLECTION_SEARCH = 'myCollSearchValue'
export const SESSION_STORAGE_LIBRARY_CHECKBOX_TYPE = 'LibraryCheckboxValueType'
export const SESSION_STORAGE_LIBRARY_CHECKBOX_COLOR = 'LibraryCheckboxValueColor'
export const SESSION_STORAGE_MYCOLLECTION_CHECKBOX_TYPE = 'MyCollectionCheckboxValueType'
export const SESSION_STORAGE_MYCOLLECTION_CHECKBOX_COLOR = 'MyCollectionCheckboxValueColor'
