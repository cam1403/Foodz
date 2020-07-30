import { atom, selector } from 'recoil';

const searchState = atom({
  key: 'searchState',
  default: '',
});

const currentSearch = atom({
  key: 'currentSearch',
  default: '',
});

const apiData = atom({
  key: 'apiData',
  default: [],
});

export { searchState, currentSearch, apiData };
