import React from "react";
import ShareCard from "./ShareCard";
import TotalValue from "./TotalValue";


const SharesGrid = ({removeShareFromDB, shares, updateShareNo, getGraph, chartType}) => {



  const sharesList = shares.map(share => {
  return <ShareCard chartType={chartType} share={share} key={share._id} getGraph={getGraph} removeShareFromDB={removeShareFromDB} updateShareNo={updateShareNo}/>
})

  return (
    <>
    {/* <TotalValue shares={shares}/> */}
        {sharesList}
    </>
  );
};

export default SharesGrid

