import React from "react";
import ShareCard from "./ShareCard";
import TotalValue from "./TotalValue";


const SharesGrid = ({removeShareFromDB, shares, updateShareNo}) => {



  const sharesList = shares.map(share => {
  return <ShareCard share={share} key={share._id} removeShareFromDB={removeShareFromDB} updateShareNo={updateShareNo}/>
})

  return (
    <ul>
    {/* <TotalValue shares={shares}/> */}
        {sharesList}
    </ul>
  );
};

export default SharesGrid

