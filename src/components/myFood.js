import React, { useState } from 'react';

// Recoil
import { useRecoilState } from 'recoil';
import { userData } from '../atoms';
// Date
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const MyFood = () => {
  const [usrData, setUsrData] = useRecoilState(userData);

  return (
    <>
      {usrData.map((result, i, arr) => {
        return (
          <Row className="results" key={i}>
            <Col>
              <p>{result.label}</p>
            </Col>
            <Col>
              <img src={result.url} />
            </Col>
            <Col>
              <p>{result.expire}</p>
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
