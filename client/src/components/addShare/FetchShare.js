import React, { useState } from 'react';
import DisplayShareList from './DisplayShareList';
import './AddShare.css'

const FetchShare = ({getInfo, updateShareInfo, getArray, shareSearchArray}) => {

    const [keywords, setKeywords] = useState(""); 

    const handleTextChange = event => setKeywords(event.target.value);

    const handleOnSubmit = event => {

        event.preventDefault();

        getArray(keywords);

        setKeywords("");
    }

  return (
      <div className='fetch-shares-container'>
      <h2>I am the fetch shares component</h2>
        <form onSubmit={handleOnSubmit}> 
            <input type="search" placeholder='Enter company or share symbol' value={keywords} onChange={handleTextChange} size="30" autoFocus required/>
            <input type="submit" value="Submit" />
        </form>
       <DisplayShareList getInfo={getInfo} shareSearchArray={shareSearchArray} updateShareInfo={updateShareInfo}/>
      </div>
  )};


export default FetchShare;
