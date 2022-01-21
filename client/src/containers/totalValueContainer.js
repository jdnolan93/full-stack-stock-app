import React from "react";
import totalValue from "../components/totalValue";
import currentValuePortfolioChart from "../components/currentValuePortfolioChart";
const totalValueContainer = () => {
  return (
    <div>
      <h1>this total value container</h1>
      <hr />
      <div>
          this is total value
        <totalValue />
      </div>
      this is portfolio chart
      <div>
        <currentValuePortfolioChart />
      </div>
    </div>
  );
};

export default totalValueContainer;
