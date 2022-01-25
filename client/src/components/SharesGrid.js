import React, {useState, useEffect} from "react";
import { getShares } from "../SharesService";
import ShareCard from "./ShareCard";


const SharesGrid = ({removeShareFromDB, shares}) => {



  const sharesList = shares.map(share => {
  return <ShareCard share={share} key={share._id} removeShareFromDB={removeShareFromDB}/>
})

  return (
    <>
        {sharesList}
    </>
  );
};

export default SharesGrid

