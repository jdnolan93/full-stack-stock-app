import React, { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SharesAppContainer from './containers/SharesAppContainer';
import {getShares, deleteShare} from './SharesService';

function App() {

  const [shares, setShares] = useState([]);

  useEffect(()=>{
    getShares().then((allShares) => {
      setShares(allShares);
    })
  }, [shares]);



  const removeShare = (id) => {
    deleteShare(id);
    setShares(shares.filter(share => share._id !== id));
  }

  return (
    <>
    <SharesAppContainer shares={shares} removeShareFromDB={id => removeShare(id)}/>
    </>
  );
}

export default App;
