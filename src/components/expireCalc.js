import React, { useState } from 'react';

// Recoil
import { useRecoilState } from 'recoil';
import { userData } from '../atoms';
// Date
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

const ExpireCalc = (props) => {
  if (props.expire.length > 1) {
    const arr = props.expire.split('/');
    console.log(arr);
    const year = parseInt(arr[2]);
    const month = parseInt(arr[0]);
    const day = parseInt(arr[1]);
    console.log(`year: ${year}, month: ${month}, day: ${day}`);
    var result = formatDistance(
      new Date(year, month, day),
      new Date('2020', '07', '30'),
      {
        addSuffix: true,
      }
    );
  }

  console.log(result);

  if (props.expire.length < 1) {
    return <p>No Expiration Date Entered</p>;
  } else {
    return result.indexOf('ago') > -1 ? (
      <p>Expired</p>
    ) : (
      <p>Expires {result}</p>
    );
  }
};

export default ExpireCalc;
