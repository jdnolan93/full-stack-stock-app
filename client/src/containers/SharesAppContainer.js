
import TotalValueContainer from "./TotalValueContainer";
import React from 'react';
import ShareDetails from '../components/ShareDetails';
import SharesGrid from '../components/SharesGrid';

import Header from "../components/Header";
import getApiKey from '../key';
import '../App.css';
import TotalValueChartDesign from "../components/totalValueChart/TotalValueChartDesign";
import TotalValueChart from "../components/totalValueChart/TotalValueChart";



// const apiKey = getApiKey()

const SharesAppContainer = ({removeShareFromDB, shares}) => {


  return <div className="container">
    <Header className="top-header"/>
    <TotalValueContainer className="total-value" shares={shares}/>
    <SharesGrid className = "sidebar" removeShareFromDB={removeShareFromDB} shares={shares}/>
    <ShareDetails className = "main-1" />
    <TotalValueChart />
    
          
  </div>;
};


export default SharesAppContainer;
