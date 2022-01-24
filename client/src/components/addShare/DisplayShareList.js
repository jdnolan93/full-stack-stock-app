import React from 'react';
import DisplayShare from './DisplayShare';
import './AddShare.css'

const DisplayShareList = ({shareSearchArray, getInfo, updateShareInfo, clearArray}) => {

   const displayShareList = shareSearchArray.map(share => <DisplayShare getInfo={getInfo} share={share} updateShareInfo={updateShareInfo} key={share['1. symbol']} />);

   const handleClick = () => {
    clearArray([])
   }
    
  return (
    <div className='display-share-list-container'>
        <p>Select a share to add to portfolio:</p>
        <ul className="display-list"> 
            {displayShareList}
        </ul>
        <div className='clear-list'>
            <button onClick={handleClick}>Clear List</button>
        </div>
    </div>
    );
};

export default DisplayShareList;
