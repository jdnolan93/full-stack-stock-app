import React from 'react';

const AddShare = ({symbolInfo, shareInfo}) => {

  return (
    <>
      <h2>I am the Add Share component</h2>
      <p>
      {shareInfo['2. name']} &nbsp; {symbolInfo['01. symbol']} &nbsp; {symbolInfo['05. price']}
      </p> 
    </>
  );
};


export default AddShare;
