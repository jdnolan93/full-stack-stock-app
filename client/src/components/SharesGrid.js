import React, {useState, useEffect} from "react";
import { getShares } from "../SharesService";
import ShareCard from "./ShareCard";
import TotalValue from "./TotalValue";


const SharesGrid = ({removeShareFromDB, shares}) => {



  const sharesList = shares.map(share => {
  return <ShareCard share={share} key={share._id} removeShareFromDB={removeShareFromDB}/>
})

  return (
    <>
    <TotalValue shares={shares}/>
        {sharesList}
    </>
  );
};

export default SharesGrid

