import React, { useState } from 'react';
import DisplayShareList from './DisplayShareList';

const FetchShare = ({getInfo, getArray, shareSearchArray, symbolInfo}) => {

    const [keywords, setKeywords] = useState(""); 

    const handleTextChange = event => setKeywords(event.target.value);

    const handleOnSubmit = event => {

        event.preventDefault();

        getArray(keywords);

        setKeywords("");
    }

  return (
      <>
        <form onSubmit={handleOnSubmit}> 
            <input type="text" placeholder='Enter company or share symbol' value={keywords} onChange={handleTextChange} size="30" autoFocus required/>
            <input type="submit" value="Submit" />
        </form>
       <DisplayShareList getInfo={getInfo} symbolInfo={symbolInfo} shareSearchArray={shareSearchArray} />

      </>
  )};


export default FetchShare;
