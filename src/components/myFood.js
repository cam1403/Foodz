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
      {usrData.map((result) => {
        return (
          <Row className="results" key={result.url}>
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
                // onClick={() => {
                //   if (stock.indexOf(result.food.foodId) > -1) {
                //     alert('You already have that food in your log!');
                //   } else {
                //     let addFoodData = [
                //       {
                //         label: result.food.label,
                //         url: result.food.image,
                //         expire: expire,
                //       },
                //     ];
                //     setUsrData(usrData.concat(addFoodData));
                //     setStock(stock.concat(result.food.foodId));
                //   }
                // }}
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
