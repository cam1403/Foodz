import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { apiData, userData, inStock, expired } from '../atoms';

// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

// Components
import DatePick from './date';

const FoodList = (props) => {
  const [data, setData] = useRecoilState(apiData);
  const [usrData, setUsrData] = useRecoilState(userData);
  const [stock, setStock] = useRecoilState(inStock);
  const [expire, setExpire] = useRecoilState(expired);

  return (
    <>
      {data.map((result, i) => {
        return (
          <Row className="results" key={i}>
            <Col>
              <p>{result.food.label}</p>
            </Col>
            <Col>
              <img src={result.food.image} />
            </Col>
            <Col>
              <DatePick />
            </Col>
            <Col>
              <Button
                variant="success"
                onClick={() => {
                  if (stock.indexOf(result.food.foodId) > -1) {
                    alert('You already have that food in your log!');
                  } else {
                    let addFoodData = [
                      {
                        label: result.food.label,
                        url: result.food.image,
                        expire: expire,
                      },
                    ];
                    setUsrData(usrData.concat(addFoodData));
                    setStock(stock.concat(result.food.foodId));
                  }
                }}
              >
                Add
              </Button>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default FoodList;
