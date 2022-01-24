import React, { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SharesAppContainer from './containers/SharesAppContainer';
import SharesGrid from './components/SharesGrid';
import {getShares} from './SharesService';

function App() {

  const [shares, setShares] = useState([]);

  useEffect(()=>{
    getShares().then((allShares) => {
      setShares(allShares);
    })
  }, []);

  const removeShare = (id) => {
    const temp = shares.map(s => s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    
    temp.splice(indexToDel, 1);
    setShares(temp)
  }

  return (
    <>
    <SharesGrid shares={shares}/>
    <SharesAppContainer />
    </>
  );
}

export default App;
