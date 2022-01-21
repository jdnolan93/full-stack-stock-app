import React, {useState }from 'react';
import AddShare from '../components/AddShare';
import FetchShare from '../components/FetchShare';

const AddShareContainer = ({apiKey}) => {

    const [shareInfo, setShareInfo] = useState("");

    const getShareInfo = symbol => {

        const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

        fetch(url)
        .then(response => response.json())
        .then(data => setShareInfo(data['Global Quote']));
    }

  return (

      <>
        <h1>Add Share Container</h1>
        <FetchShare getShareInfo={getShareInfo} shareInfo={shareInfo}/>
        <AddShare />
      </>
    );
};

export default AddShareContainer;
