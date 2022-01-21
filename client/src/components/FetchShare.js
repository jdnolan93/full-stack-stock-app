import React, { useState } from 'react';

const FetchShare = ({getSharePrice}) => {

    const [symbol, setSymbol] = useState("");

    

  return (
     <form onSubmit={handleOnSubmit}> 
         <input type="text" placeholder='Enter share symbol' value={symbol} onChange={handleTextChange} autofocus required />
         <input type="submit" value="Submit" />
     </form>
  )};


export default FetchShare;
