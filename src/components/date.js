import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';
import Form from 'react-bootstrap/Form';
import { expired } from '../atoms';

const DatePick = () => {
  const [expire, setExpire] = useRecoilState(expired);

  return (
    <>
      <p>Expiration Date</p>
      <Form.Control
        size="sm"
        type="text"
        placeholder="MM/DD/YYYY"
        onChange={(e) => {
          setExpire(e.target.value);
        }}
      />
    </>
  );
};

export default DatePick;
