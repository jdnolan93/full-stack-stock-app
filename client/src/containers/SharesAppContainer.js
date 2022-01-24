
import TotalValueContainer from "./TotalValueContainer";
import React from 'react';
import ShareDetails from '../components/ShareDetails';
import SharesGrid from '../components/SharesGrid';
import getApiKey from '../key';
import AddShareContainer from './AddShareContainer';
import {postShare} from '../SharesService';







const SharesAppContainer = () => {
  const apiKey = getApiKey();

  const addNewShare = (newShare) => {
    postShare(newShare)
    // .then(newShareObject => setWhateverWeNameListOfShares([...WwateverWeNameListOfShares, newShareObject]));
      }

  



// const apiKey = getApiKey()


  return (<div>
    <TotalValueContainer />
    <SharesGrid/>
    <ShareDetails /> 
    <AddShareContainer apiKey={apiKey} postShareObject={newShare => addNewShare(newShare)} />

          
  </div>)

};


export default SharesAppContainer;
