import React from 'react';
import SharesAppContainer from '../containers/SharesAppContainer';

const ShareCard = ({share}) => {
  return <ul> 
      <h1> {share.name} </h1>
      <p> {share.noOfShares}</p>
      <p> {share.symbol} </p>
  </ul>;
};

export default ShareCard;
