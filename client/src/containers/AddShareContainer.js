import React, { useEffect, useState } from 'react';
import AddShare from '../components/AddShare';
import FetchShare from '../components/FetchShare';

const AddShareContainer = ({apiKey}) => {

    const [shareSearchArray, setShareISearchArray] = useState([]);
    
    const [symbolInfo, setSymbolInfo] = useState({}); 

    const [shareInfo, setShareInfo] = useState({});

    const getShareSearchArray = keywords => {

        const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${apiKey}`;

        fetch(url)
        .then(response => response.json())
        .then(data => setShareISearchArray(data.bestMatches));
    } 

    const getSymbolInfo = symbol => {

        const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

        fetch(url)
        .then(response => response.json())
        .then(data => setSymbolInfo(data['Global Quote']));        
    }


  return (
      <>
        <h1>Add Share Container</h1>
        <FetchShare getInfo={symbol => getSymbolInfo(symbol)} updateShareInfo={share => setShareInfo(share)} getArray={keywords => getShareSearchArray(keywords)} shareSearchArray={shareSearchArray}/>
        <AddShare symbolInfo={symbolInfo} shareInfo={shareInfo}/>
      </>
    );
};

export default AddShareContainer;
