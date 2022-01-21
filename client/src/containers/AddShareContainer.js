import React, {useState }from 'react';
import AddShare from '../components/AddShare';
import FetchShare from '../components/FetchShare';

const AddShareContainer = ({apiKey}) => {

    const [symbolInfo, setSymbolInfo] = useState(""); 

    const [shareSearchArray, setShareISearchArray] = useState([]);

    const getSymbolInfo = symbol => {

        const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

        fetch(url)
        .then(response => response.json())
        .then(data => setSymbolInfo(data['Global Quote']));
    }

    const getShareSearchArray = keywords => {

        const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${apiKey}`;

        fetch(url)
        .then(response => response.json())
        .then(data => setShareISearchArray(data.bestMatches));
    }

  return (

      <>
        <h1>Add Share Container</h1>
        <FetchShare getSymbolInfo={getSymbolInfo} getShareSearchArray={getShareSearchArray} symbolInfo={symbolInfo}/>
        <AddShare />
      </>
    );
};

export default AddShareContainer;
