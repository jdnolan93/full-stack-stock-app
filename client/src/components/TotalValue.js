import React from 'react';

const TotalValue = ({ shares }) => {

  const noOfShare = shares.map((s) => s.noOfShares);
  const currentPrice = shares.map((s) => s.currentPrice);
  const totalValue = noOfShare.reduce(function (r, a, i) {
    return r + a * currentPrice[i];
  }, 0);
  return(
  <div>

    <h2>total value</h2>
    {totalValue}
  </div>)
};

export default TotalValue;
