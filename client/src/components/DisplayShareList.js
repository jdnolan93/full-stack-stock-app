import React from 'react';
import DisplayShare from './DisplayShare';



const DisplayShareList = ({shareSearchArray, getInfo, symbolInfo}) => {

   const displayShareList = shareSearchArray.map(share => <DisplayShare getInfo={getInfo} share={share} key={share['1. symbol']} />);
    
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
