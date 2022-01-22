import React from 'react';
import DisplayShare from './DisplayShare';

const DisplayShareList = ({shareSearchArray, getInfo, updateShareInfo}) => {

   const displayShareList = shareSearchArray.map(share => <DisplayShare getInfo={getInfo} share={share} updateShareInfo={updateShareInfo} key={share['1. symbol']} />);
    
  return (
    <>
        <h2>I am the list of shares component</h2>
        <ul>
            {displayShareList}
        </ul>
    </>
    );
};

export default DisplayShareList;
