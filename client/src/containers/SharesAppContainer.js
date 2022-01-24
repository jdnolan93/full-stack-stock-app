
import TotalValueContainer from "./TotalValueContainer";
import React from 'react';
import ShareDetails from '../components/ShareDetails';
import SharesGrid from '../components/SharesGrid';
import Header from '../components/Header';
import getApiKey from '../key';



// const apiKey = getApiKey()

const SharesAppContainer = () => {


  return <div>
    <Header/>
    <TotalValueContainer />
    <SharesGrid/>
    <ShareDetails /> 

          
  </div>;
};

export default SharesAppContainer;
