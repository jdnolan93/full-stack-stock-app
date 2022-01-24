import React from 'react';
import ShareDetails from '../components/ShareDetails';
import getApiKey from '../key';

const apiKey = getApiKey()

const SharesAppContainer = () => {
  return <ShareDetails /> 
};

export default SharesAppContainer;
