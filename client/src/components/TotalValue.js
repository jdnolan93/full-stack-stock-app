import React from 'react';

const TotalValue = ({ shareObjects }) => {

  const noOfShare = shareObjects.map((s) => s.noOfShares);
  const currentPrice = shareObjects.map((s) => s.currentPrice);
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
