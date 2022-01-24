import React from 'react';
import getApiKey from '../key';
import AddShareContainer from './AddShareContainer';
import {postShare} from '../SharesService';


const SharesAppContainer = () => {

  const apiKey = getApiKey();

  const addNewShare = (newShare) => {
    postShare(newShare)
    // .then(newShareObject => setWhateverWeNameListOfShares([...WwateverWeNameListOfShares, newShareObject]));
      }

  return (
    <AddShareContainer apiKey={apiKey} postShareObject={newShare => addNewShare(newShare)} />
  );
};

export default SharesAppContainer;
