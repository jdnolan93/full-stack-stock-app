import React from 'react';

const AddShare = (symbolInfo, shareInfo) => {

  return (
    <>
      <h2>I am the Add Share component</h2>
      <p>
      Details should be displayed here: {shareInfo['2. name']} &nbsp; {symbolInfo['01. symbol']}
      </p> 
    </>
  );
};


export default AddShare;
