import React, { useState, useEffect } from "react";
import TotalValue from "../components/TotalValue";
import CurrentValuePortfolioChart from "../components/CurrentValuePortfolioChart";
import { getShares } from "../SharesService";
// import getApiKey from "../../key";

const TotalValueContainer = () => {
  const [sharePrice, setSharePrice] = useState([]);
  const [shareObjects, setShareObjects] = useState([]);

  useEffect(() => {
    getSharePrice();
  }, []);

  //getting the shareObjects
  useEffect(() => {
    getShares().then((data) => setShareObjects(data));
  }, []);



  const getSharePrice = (symbol) => {
    const apiKey = "LRR6RICZA3EIW3I0";
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setSharePrice(data["Time Series (Daily)"]));
    };
    //get the close price
    const temp = [];
    for (let a in sharePrice) {
      temp.push(sharePrice[a]["4. close"]);
    }
    

  return (
    <div>
      <h1>this total value container</h1>
      <hr />
      <div>
        <TotalValue shareObjects={shareObjects}/>
        <CurrentValuePortfolioChart shareObjects={shareObjects} />
      </div>
    </div>
  );
};

export default TotalValueContainer;
