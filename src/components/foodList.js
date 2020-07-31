import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { apiData, userData, inStock } from '../atoms';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const FoodList = (props) => {
  const [data, setData] = useRecoilState(apiData);
  const [usrData, setUsrData] = useRecoilState(userData);
  const [stock, setStock] = useRecoilState(inStock);

  return (
    <>
      {data.map((result) => {
        return (
          <Row className="results" key={result.food.foodId}>
            <Col>
              <p>{result.food.label}</p>
            </Col>
            <Col>
              <img src={result.food.image} />
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
