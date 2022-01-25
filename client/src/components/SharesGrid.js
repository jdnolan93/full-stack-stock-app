import React from "react";
import ShareCard from "./ShareCard";


const SharesGrid = ({removeShareFromDB, shares, updateShareNo}) => {



  const sharesList = shares.map(share => {
  return <ShareCard share={share} key={share._id} removeShareFromDB={removeShareFromDB} updateShareNo={updateShareNo}/>
})

  return (
    <>
        {sharesList}
    </>
  );
};

export default SharesGrid

