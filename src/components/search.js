import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchState, currentSearch, apiData } from '../atoms';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { searchIng } from './apiSearchModel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Search = (props) => {
  const [search, setSearch] = useRecoilState(searchState);
  const [cSearch, setCSearch] = useRecoilState(currentSearch);
  const [data, setData] = useRecoilState(apiData);

  return (
    <Row>
      <Col>
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
              searchIng(search, (results) => {
                setData(results);
              });
              setCSearch(search);
            }}
          >
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Search;
