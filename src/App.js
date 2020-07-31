import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Container from 'react-bootstrap/Container';

// Atoms
import { currentSearch } from './atoms';

// Components
import Search from './components/search';
import FoodList from './components/foodList';

const App = (props) => {
  const [cSearch, setCSearch] = useRecoilState(currentSearch);

  return (
    <Container>
      <h1 className="title">Whatcha Got?</h1>
      <Search />
      {cSearch.length > 0 ? <FoodList /> : ''}
    </Container>
  );
};

export default App;
