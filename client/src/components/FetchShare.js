import React, { useState } from 'react';
import DisplayShare from './DisplayShare';

const FetchShare = ({getSymbolInfo, getShareSearchArray, shareSearchArray, symbolInfo}) => {

    // const [symbol, setSymbol] = useState("");

    // const handleTextChange = event => setSymbol(event.target.value);

    // const handleOnSubmit = event => {

    //     event.preventDefault();

    //     getSymbolInfo(symbol);

    //     setSymbol("");
    // }

    const [keywords, setKeywords] = useState(""); 

    const handleTextChange = event => setKeywords(event.target.value);

    const handleOnSubmit = event => {

        event.preventDefault();

        getShareSearchArray(keywords);

    }


  return (
      <>
        <form onSubmit={handleOnSubmit}> 
            <input type="text" placeholder='Enter company or share symbol' value={keywords} onChange={handleTextChange} autoFocus required/>
            <input type="submit" value="Submit" />
        </form>
        <DisplayShare symbolInfo={symbolInfo} shareSearchArray={shareSearchArray}/>

      </>
  )};


export default FetchShare;
