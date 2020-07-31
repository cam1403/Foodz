import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { currentSearch } from '../atoms';

const Nav = () => {
  const [cSearch, setCSearch] = useRecoilState(currentSearch);

  return (
    <>
      <Row>
        <Col>
          <h1 className="title">Whatcha Got?</h1>
        </Col>
      </Row>
      <Row className="navigation">
        <Col>
          <Button
            variant="primary"
            ClassName="nav"
            onClick={(e) => {
              setCSearch('');
            }}
          >
            My food
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Nav;
