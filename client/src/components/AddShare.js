import React from 'react';

const AddShare = (symbolInfo, companyName) => {


  return (
    <>
      <h2>I am the Add Share component</h2>
      <p>
      {companyName[0]} &nbsp; {symbolInfo['05. price']}
      </p> 
    </>
    
  );
      
  };


export default AddShare;
