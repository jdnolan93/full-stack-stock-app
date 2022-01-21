import React from "react";
import TotalValue from "../components/TotalValue";
import CurrentValuePortfolioChart from "../components/CurrentValuePortfolioChart";
const TotalValueContainer = () => {
  return (
    <div>
      <h1>this total value container</h1>
      <hr />
      <div>
          
        <TotalValue />
      </div>

      <div>
        <CurrentValuePortfolioChart />
      </div>
    </div>
  );
};

export default TotalValueContainer;
