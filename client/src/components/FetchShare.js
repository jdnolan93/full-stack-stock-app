import React, { useState } from 'react';
import DisplayShare from './DisplayShare';

const FetchShare = ({getShareInfo, share}) => {

    const [symbol, setSymbol] = useState("");

    const handleTextChange = event => setSymbol(event.target.value);

    const handleOnSubmit = event => {

        event.preventDefault();

        getShareInfo(symbol);

        setSymbol("");
    }

  return (
      <>
        <form onSubmit={handleOnSubmit}> 
            <input type="text" placeholder='Enter share symbol' value={symbol} onChange={handleTextChange} autoFocus required/>
            <input type="submit" value="Submit" />
        </form>
        <DisplayShare share={share}/>

      </>
  )};


export default FetchShare;
