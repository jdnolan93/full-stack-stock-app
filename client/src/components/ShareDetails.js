import React, {useState, useEffect} from 'react';
import getApiKey from '../key';
import { getShares } from '../SharesService';

//below are import needed for the chart
import ChartDesign from './ChartDesign';




const ShareDetails = () => {
    const apiKey = getApiKey()
    const [shares, setShares] = useState([])
    const [selectedShare, setSelectedShare] = useState("MSFT")
    const [selectedTime, setSelectedTime] = useState ("DAILY")
    const [shareData, setShareData] = useState([])
    const [chartHeadline, setChartHeadline] = useState(selectedShare)
    const [loading, setLoading] = useState(true)
    
    const getShareData = async (symbol, timeFrame) => {
        setLoading(true)

        const convertDataForChart = (inputData) => {
            let sharesDataArr = []
                  for (let key in inputData) {
              
                    if (inputData.hasOwnProperty(key)) {
                        let prices = Object.values(inputData[key])
                        prices = prices.map(Number)
                        sharesDataArr.push([parseInt((new Date(key).getTime()).toFixed(0))].concat(prices))
                    }
                      
                  }
          return sharesDataArr.reverse()
        }

        const timeFrameURL = () => {
            if (selectedTime === "DAILY") {
                return "Time Series (Daily)"
            }
            else if (selectedTime === "WEEKLY") {
                return "Weekly Time Series"
            }
            else if (selectedTime === "MONTHLY") {
                return "Monthly Time Series"
            }
        }
        const sharesApiURL = `https://www.alphavantage.co/query?function=TIME_SERIES_${timeFrame}&symbol=${symbol}&apikey=${apiKey}`
        return fetch(sharesApiURL)
        .then(respose => respose.json())
        .then((data) => 
            convertDataForChart(data[timeFrameURL()]), setLoading(false))
        .catch(err=>console.log(err))
        
        
        
    }
        
    
    useEffect(() => {
        getShareData(selectedShare, selectedTime).then((result) => setShareData(result))}
        , []);
    
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
    
    const handleShareData = (event) => {
        event.preventDefault();
        setChartHeadline(selectedShare)
        getShareData(selectedShare, selectedTime).then((result) => setShareData(result))

    }

    const chartFunc = () => {
    if (loading) {
        return <h2>Page is still loading</h2>
    }
    return <ChartDesign selectedShare={chartHeadline} shareData={shareData}/>
    }


  return (
        <><div>
        <form  onSubmit={handleShareData}>
        <label htmlFor="shares_drop_down">Choose a share:</label>
        <select id="shares_drop_down" onChange={onChange}>
        <option default disabled >Company</option>
                {sharesNodes}
        </select>
        <br />
        <label htmlFor="shares_drop_down">Choose a timeframe:</label>
        <select id="shares_drop_down" onChange={onChangeTime}>
        <option default disabled >Timeframe</option>
        <option value="DAILY" >Daily</option>
        <option value="WEEKLY">Weekly</option>
        <option value="MONTHLY" >Monthly</option>
        </select>
        <input type="submit" value="Select" />
        </form>
        <br />
        {chartFunc()}
        </div>
        </>)
};

export default ShareDetails;
