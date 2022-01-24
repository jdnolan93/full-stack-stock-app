import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";
import './AddShare.css';


const AddShare = ({symbolInfo, shareInfo, postShareObject, updateShareInfo}) => {

  const isArrayEmpty = Object.keys(shareInfo).length === 0 && shareInfo.constructor === Object;

  const display =  isArrayEmpty ? "You've not chosen any shares to add yet" : `${shareInfo['2. name']}  (${symbolInfo['01. symbol']})  ${symbolInfo['05. price']}p` 

  const moreInfo = () => {

    if(!isArrayEmpty) {
      return  <>
      <span data-tip data-for="moreInfo" className='info'>i</span>
      <ReactTooltip id="moreInfo">
        <span>Price: {symbolInfo['05. price']}p<br/> Open: {symbolInfo['02. open']}p<br/> High: {symbolInfo['03. high']}p<br/>Low: {symbolInfo['04. low']}p<br/></span>
      </ReactTooltip>
      </>
    }
  }

  const [noOfShares, setNoOfShares] = useState("");

  const handleOnChange = (event) => setNoOfShares(event.target.value);

  const handleOnSubmit = (event) => {

    event.preventDefault();


    if(!isArrayEmpty) {

      const shareObject = {
        name: shareInfo['2. name'],
        symbol: shareInfo['1. symbol'],
        noOfShares: Number(noOfShares),
        price: symbolInfo['05. price']
      } 

      postShareObject(shareObject);        
    }

    updateShareInfo({});
    
    setNoOfShares("");
  }

  return (
    <div className='add-share-container'>

      <div className='display'>
      {display} &nbsp; {moreInfo()} 
      </div> 
      <form onSubmit={handleOnSubmit}> 
        <input type="number" min="1" placeholder='No. of shares' onChange={handleOnChange} value={noOfShares} required/>
        <input type="submit" value="Add to portfolio"/>
      </form>
    </div>
  );
};


export default AddShare;
