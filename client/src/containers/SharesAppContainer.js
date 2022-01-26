
import TotalValueContainer from "./TotalValueContainer";
import React from 'react';
import ShareDetails from '../components/ShareDetails';
import SharesGrid from '../components/SharesGrid';

import Header from "../components/Header";
import getApiKey from '../key';
import '../App.css';

import CurrentValuePortfolioChart from "../components/CurrentValuePortfolioChart";



// const apiKey = getApiKey()

const SharesAppContainer = ({removeShareFromDB, shares}) => {


  return <div className="container">
        <div className="left" className="column">
          <div className="top-right"><p>empty</p></div>
          <SharesGrid className="bottom" removeShareFromDB={removeShareFromDB} shares={shares}/>
        </div>
        <div className="right" className="column">
    <Header className="top-right"/>
    <CurrentValuePortfolioChart className="bottom" shares={shares}/> 
        </div>
  </div>
};


export default SharesAppContainer;
