import React from 'react';

const TotalValue = ({ shares }) => {

  const noOfShare = shares.map((s) => s.noOfShares);
  const currentPrice = shares.map((s) => s.currentPrice);
  const totalValue = noOfShare.reduce(function (r, a, i) {
    return r + a * currentPrice[i];
  }, 0);
  return(
  <div>
    <h1>{totalValue}</h1>
  </div>)
};

export default TotalValue;
