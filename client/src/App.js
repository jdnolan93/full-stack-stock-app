import React, { useState, useEffect } from 'react';
import './App.css';
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
  return (
    <SharesGrid shares={shares}/>
  );
}

export default App;
