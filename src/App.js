import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Container from 'react-bootstrap/Container';

// Atoms
import { currentSearch } from './atoms';

// Components
import Search from './components/search';
import FoodList from './components/foodList';
import Nav from './components/navbar';

const App = (props) => {
  const [cSearch, setCSearch] = useRecoilState(currentSearch);

  return (
    <Container>
      <Nav />
      <Search />
      {cSearch.length > 0 ? <FoodList /> : ''}
    </Container>
  );
};

export default App;
