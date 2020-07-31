import React, { useState } from 'react';

// Recoil
import { useRecoilState } from 'recoil';
import { userData } from '../atoms';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Components
import ExpireCalc from '../components/expireCalc';

const MyFood = () => {
  const [usrData, setUsrData] = useRecoilState(userData);

  return (
    <>
      {usrData.map((result, i, arr) => {
        return (
          <Row key={i} className="results">
            <Col>
              <p>{result.label}</p>
            </Col>
            <Col>
              <img src={result.url} />
            </Col>
            <Col>
              <ExpireCalc expire={result.expire} />
            </Col>
            <Col>
              <Button
                variant="danger"
                onClick={() => {
                  const newarr = [...arr];
                  newarr.splice(i, 1);
                  setUsrData(newarr);
                }}
              >
                Remove
              </Button>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default MyFood;
