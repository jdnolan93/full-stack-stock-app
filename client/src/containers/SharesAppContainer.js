import React from 'react';
import SharesGrid from '../components/SharesGrid';
import '../App.css';
import NavBar from "../components/NavBar";
import CurrentValuePortfolioChart from "../components/CurrentValuePortfolioChart";

const SharesAppContainer = ({removeShareFromDB, shares}) => {

  return <div className="container">
        <div className="left" className="column">
          <div className="top-right"><p>empty</p></div>
          <SharesGrid className="bottom" removeShareFromDB={removeShareFromDB} shares={shares}/>
        </div>
        <div className="right" className="column">
    <CurrentValuePortfolioChart className="bottom" shares={shares}/> 
        </div>
  </div>

};

export default SharesAppContainer;
