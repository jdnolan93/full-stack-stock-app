
import TotalValueContainer from "./TotalValueContainer";
import React from 'react';
import ShareDetails from '../components/ShareDetails';
import SharesGrid from '../components/SharesGrid';
import getApiKey from '../key';



// const apiKey = getApiKey()

const SharesAppContainer = () => {


  return <div>
    <TotalValueContainer />
    <SharesGrid/>
    <ShareDetails /> 

          
  </div>;
};

export default SharesAppContainer;
