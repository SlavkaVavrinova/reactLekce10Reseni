import React, { useState, useEffect } from 'react';
import './style.css';

const Rate = ({ from }) => {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${from}&to=CZK`)
      .then((response) => response.json())
      .then((data) => setRate(data.rates.CZK));
  });

  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{rate} CZK</div>
    </div>
  );
};

export default Rate;
