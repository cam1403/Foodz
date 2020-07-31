import { atom, selector } from 'recoil';

const searchState = atom({
  key: 'searchState',
  default: '',
});

const expired = atom({
  key: 'expired',
  default: '',
});

const currentSearch = atom({
  key: 'currentSearch',
  default: '',
});

const userData = atom({
  key: 'userData',
  default: [],
});

const inStock = atom({
  key: 'inStock',
  default: [],
});

const apiData = atom({
  key: 'apiData',
  default: [],
});

export { searchState, currentSearch, apiData, userData, inStock, expired };
