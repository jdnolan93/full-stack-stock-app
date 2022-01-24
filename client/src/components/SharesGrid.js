import React, {useState, useEffect} from "react";
import { getShares } from "../SharesService";
import ShareCard from "./ShareCard";


const SharesGrid = ({removeShare}) => {
  const [shares, setShares] = useState([])
  useEffect(() => {
    getShares().then((result) => setShares(result))
    
}, [])


  const sharesList = shares.map(share => {
  return <ShareCard share={share} key={share._id} removeShare={removeShare}/>
})

  return (
    <>
        {sharesList}
    </>
  );
};

export default SharesGrid

