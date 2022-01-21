import React from 'react';
import getApiKey from '../key';
import AddShareContainer from './AddShareContainer';


const SharesAppContainer = () => {

  const apiKey = getApiKey()

  return (
    <AddShareContainer apiKey={apiKey}/>
  );
};

export default SharesAppContainer;
