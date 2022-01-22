import React, {useState, useEffect} from 'react';
import getApiKey from '../key';
import { getShares } from '../SharesService';

const ShareDetails = () => {
    const apiKey = getApiKey()
    const [shares, setShares] = useState([])
    const [selectedShare, setSelectedShare] = useState("")
    const [selectedTime, setSelectedTime] = useState ("")
    const sharesApiURL = "https://www.alphavantage.co/query?function=TIME_SERIES_"+{selectedTime}+"&symbol="+{selectedShare}+"&apikey="+{apiKey}
    
    
    
    useEffect(() => {
        getShares().then((result) => setShares(result))
        
    }, [])

    const sharesNodes = shares.map((share, index) => {
        return <option key={index} value={share.symbol}>{share.name}</option>

        
    })
    const onChange = (event) => {
        setSelectedShare(event.target.value)
    }

    const onChangeTime = (event) => {
        setSelectedTime(event.target.value)
    }
    

    


  return (
        <><div>
        <form>
        <label htmlFor="shares_drop_down">Choose a share:</label>
        <select id="shares_drop_down" onChange={onChange} >
   {sharesNodes}
        </select>
        <br />
        <label htmlFor="shares_drop_down">Choose a timeframe:</label>
        <select id="shares_drop_down" onChange={onChangeTime} >
        <option value="DAILY" >Daily</option>
        <option value="WEEKLY">Weekly</option>
        <option value="MONTHLY" >Monthly</option>
        </select>
        <input type="submit" value="Select" />
        </form>
        </div>
        </>)
};

export default ShareDetails;
