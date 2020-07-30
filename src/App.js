import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

// Atoms
import { currentSearch } from './atoms';

// Components
import Search from './components/search';
import FoodList from './components/foodList';

const App = (props) => {
  const [cSearch, setCSearch] = useRecoilState(currentSearch);

  return (
    <>
      <Search />
      {cSearch.length > 0 ? <FoodList /> : ''}
    </>
  );
};

export default App;
