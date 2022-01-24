
import TotalValueContainer from "./TotalValueContainer";
import React from 'react';
import SharesGrid from '../components/SharesGrid';
import getApiKey from '../key';



// const apiKey = getApiKey()

const SharesAppContainer = () => {

  return <div>
    <TotalValueContainer />
    <SharesGrid/>
          
  </div>;
};

export default SharesAppContainer;
