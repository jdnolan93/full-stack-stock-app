
import TotalValueContainer from "./TotalValueContainer";
import React from 'react';
import ShareDetails from '../components/ShareDetails';
import SharesGrid from '../components/SharesGrid';
import Header from "../components/Header";
import getApiKey from '../key';
import '../App.css';



// const apiKey = getApiKey()

const SharesAppContainer = () => {


  return <div class="container">
    <Header class="top-header"/>
    <TotalValueContainer class="total-value"/>
    <SharesGrid class = "sidebar"/>
    <ShareDetails class = "main-1" /> 
    <ShareDetails class = "main-2" />
          
  </div>;
};

export default SharesAppContainer;
