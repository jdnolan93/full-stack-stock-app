
import TotalValueContainer from "./TotalValueContainer";
import React from 'react';
import ShareDetails from '../components/ShareDetails';
import SharesGrid from '../components/SharesGrid';
import Header from "../components/Header";
import '../App.css';

const SharesAppContainer = ({removeShareFromDB, shares, updateShareNo}) => {

  return (
  <div className="container">
    <Header className="top-header"/>
    <TotalValueContainer className="total-value" shares={shares}/>
    <SharesGrid className = "sidebar" removeShareFromDB={removeShareFromDB} shares={shares} updateShareNo={updateShareNo}/>
    <ShareDetails className = "main-1" /> 
  </div>
  );
};


export default SharesAppContainer;
