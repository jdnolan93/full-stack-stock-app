import React, { useState, useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SharesAppContainer from './containers/SharesAppContainer';
import AddShareContainer from './containers/AddShareContainer';
import {getShares, postShare, deleteShare} from './SharesService';
import getApiKey from './key';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";




function App() {
  const apiKey = getApiKey();

  const [shares, setShares] = useState([]);

  useEffect(() => {
    getShares().then((allShares) => setShares(allShares));
  }, []);


  const removeShare = (id) => {
    deleteShare(id);
    setShares(shares.filter(share => share._id !== id));
  }


  const addNewShare = (newShare) => {
    postShare(newShare)
    .then(newShareObject => setShares([...shares, newShareObject]));
  }

  return (
    
    <Router>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/" element={<SharesAppContainer shares={shares} removeShareFromDB={id => removeShare(id)}/>} />
        <Route path="/add" element={<AddShareContainer apiKey={apiKey} postShareObject={newShare => addNewShare(newShare)}/>} />
      </Routes>
    </Router>


  );
}


export default App
