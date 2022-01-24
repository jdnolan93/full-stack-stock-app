import { useState } from 'react';
import SharesAppContainer from '../containers/SharesAppContainer';

const ShareCard = ({shares}) => {
  return <> 
      <h1> {shares.name} </h1>
      <p> {shares.noOfShares}</p>
      <p> {shares.symbol} </p>
  </>;
};

export default ShareCard
