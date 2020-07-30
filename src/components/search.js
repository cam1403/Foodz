import React, { useState } from 'react';
import { searchState } from '../atoms';
import { useRecoilState } from 'recoil';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import searchIng from './apiSearchModel';

const Search = (props) => {
  const [search, setSearch] = useRecoilState(searchState);

  return (
    <Form>
      <Form.Group controlId="search">
        <Form.Control
          type="search"
          name="search"
          placeholder="Search For A Food"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Form.Group>
      <Button
        variant="success"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log(`clicked ${search} and ${typeof search}`);
          searchIng(search);
        }}
      >
        Submit
      </Button>
    </Form>
  );
};

export default Search;
