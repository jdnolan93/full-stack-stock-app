import React, { useState } from 'react';

const AddShare = ({symbolInfo, shareInfo, postShareObject}) => {

  const isArrayEmpty = Object.keys(symbolInfo).length === 0 && symbolInfo.constructor === Object;

  let display =  isArrayEmpty ? "You've not chosen any shares to add yet" : `${shareInfo['2. name']}  (${symbolInfo['01. symbol']})  ${symbolInfo['05. price']}p` 

  const [noOfShares, setNoOfShares] = useState("");

  const handleOnChange = (event) => setNoOfShares(event.target.value);

  const handleOnSubmit = (event) => {

    event.preventDefault();

    if(!isArrayEmpty) {
      const shareObject = {
        name: shareInfo['2. name'],
        symbol: shareInfo['1. symbol'],
        noOfShares: Number(noOfShares)
      } 
      postShareObject(shareObject);     
    }

    const success = document.querySelector('.display');
    success.textContent = "Added!"
    
    setNoOfShares("");
  }

  return (
    <div className='add-share-container'>
      <h2>I am the Add Share component</h2>
      <p className='display'>
      {display}
      </p> 
      <form onSubmit={handleOnSubmit}> 
        <input type="number" min="1" placeholder='No. of shares' onChange={handleOnChange} value={noOfShares} required/>
        <input type="submit" value="Add to portfolio"/>
      </form>
    </div>
  );
};


export default AddShare;
