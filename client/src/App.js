import React, { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SharesAppContainer from './containers/SharesAppContainer';
import SharesGrid from './components/SharesGrid';
import {getShares} from './SharesService';
import TotalValueChart from './components/totalValueChart/TotalValueChart';

function App() {

  const [shares, setShares] = useState([]);

  useEffect(()=>{
    getShares().then((allShares) => {
      setShares(allShares);
    })
  }, []);
  return (
    <>
    <SharesGrid shares={shares}/>
    <SharesAppContainer />
    <TotalValueChart shares={shares}/>
    </>
  );
}

export default App;
