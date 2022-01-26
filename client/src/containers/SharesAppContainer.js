import React from 'react';
import SharesGrid from '../components/SharesGrid';
import '../App.css';

import TotalValueChartDesign from "../components/totalValueChart/TotalValueChartDesign";
import TotalValueChart from "../components/totalValueChart/TotalValueChart";

import NavBar from "../components/NavBar";
import CurrentValuePortfolioChart from "../components/CurrentValuePortfolioChart";
import TotalValueContainer from './TotalValueContainer';
import TotalValue from '../components/TotalValue';


const SharesAppContainer = ({removeShareFromDB, shares}) => {

  return <div className="container">

        <div className="left" className="column">
          <TotalValue shares={shares} className="top-left"/>
          <SharesGrid className="bottom" removeShareFromDB={removeShareFromDB} shares={shares}/>
        </div>
        <div className="right" className="column">

    <div className="top-right"/>

    <CurrentValuePortfolioChart className="bottom" shares={shares}/> 
        </div>

  </div>


};

export default SharesAppContainer;
