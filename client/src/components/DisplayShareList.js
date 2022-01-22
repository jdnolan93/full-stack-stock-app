import React from 'react';
import DisplayShare from './DisplayShare';

const DisplayShareList = ({shareSearchArray, getInfo, updateShareInfo}) => {

   const displayShareList = shareSearchArray.map(share => <DisplayShare getInfo={getInfo} share={share} updateShareInfo={updateShareInfo} key={share['1. symbol']} />);
    
  return (
    <>
        <p>I am a list of shares</p>
        <ul>
            {displayShareList}
        </ul>
    </>
    );
};

export default DisplayShareList;
