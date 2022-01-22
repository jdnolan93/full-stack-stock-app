import React, { useState } from 'react';

const AddShare = ({symbolInfo, shareInfo, postShareObject}) => {

  // const display = (symbolInfo === {} || shareInfo ==={}) ? " " : `${shareInfo['2. name']}  (${symbolInfo['01. symbol']})  ${symbolInfo['05. price']}p`

  const [noOfShares, setNoOfShares] = useState("");

  const handleOnChange = (event) => setNoOfShares(event.target.value);

  const handleOnSubmit = (event) => {

    event.preventDefault();

    const shareObject = {
        name: shareInfo['2. name'],
        symbol: shareInfo['1. symbol'],
        noOfShares: Number(noOfShares)
    }

    postShareObject(shareObject);

    setNoOfShares("");
  }

  return (
    <>
      <h2>I am the Add Share component</h2>
      <p>
      {shareInfo['2. name']}  {symbolInfo['01. symbol']}  {symbolInfo['05. price']}
      </p> 
      <form onSubmit={handleOnSubmit}> 
        <input type="number" min="1" placeholder='No. of shares' onChange={handleOnChange} value={noOfShares} required/>
        <input type="submit" value="Add to portfolio"/>
      </form>
    </>
  );
};


export default AddShare;
