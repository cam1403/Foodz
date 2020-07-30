import { atom, selector } from 'recoil';

const searchState = atom({
  key: 'searchState',
  default: '',
});

export { searchState };
