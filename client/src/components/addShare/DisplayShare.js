import React from 'react';

const DisplayShare = ({share, getInfo, updateShareInfo}) => {

    const handleClick = () => {
        getInfo(share['1. symbol']);
        updateShareInfo(share);
    };

    // console.log(share)
    
    return (
        <li>
            {share['2. name']} &nbsp; {share['4. region']} &nbsp;  {share['1. symbol']} &nbsp; <button onClick={handleClick}>+</button>
       </li>
    );
};

export default DisplayShare;