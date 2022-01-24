
import TotalValueContainer from "./TotalValueContainer";
import React from 'react';
import ShareDetails from '../components/ShareDetails';
import SharesGrid from '../components/SharesGrid';


const SharesAppContainer = ({shares}) => {
  
  return (
  <div>
    <TotalValueContainer />
    <SharesGrid shares={shares} />
    <ShareDetails /> 
  </div>
  );
}


export default SharesAppContainer;
