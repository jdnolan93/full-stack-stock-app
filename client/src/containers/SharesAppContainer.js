import React from 'react';
import getApiKey from '../key';
import AddShareContainer from './AddShareContainer';

const apiKey = getApiKey()

const SharesAppContainer = () => {

  return (
    <AddShareContainer/>
  );
};

export default SharesAppContainer;
