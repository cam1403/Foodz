import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import Button from 'react-bootstrap/Button';
import { apiData } from '../atoms';

const FoodList = (props) => {
  const [data, setData] = useRecoilState(apiData);

  return (
    <>
      {data.map((result) => {
        return <p>{result.food.label}</p>;
      })}
    </>
  );
};

export default FoodList;
