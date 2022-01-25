
import TotalValueContainer from "./TotalValueContainer";
import React from 'react';
import ShareDetails from '../components/ShareDetails';
import SharesGrid from '../components/SharesGrid';

import Header from "../components/Header";
import getApiKey from '../key';
import '../App.css';



// const apiKey = getApiKey()

const SharesAppContainer = ({removeShareFromDB, shares}) => {


  return <div className="container">
    <Header className="top-header"/>
    <TotalValueContainer className="total-value"/>
    <SharesGrid className = "sidebar" removeShareFromDB={removeShareFromDB} shares={shares}/>
    <ShareDetails className = "main-1" /> 
    
          
  </div>;
};


export default SharesAppContainer;
