import React, {useState, useEffect} from 'react';
import getApiKey from '../key';
import { getShares } from '../SharesService';

//below are import needed for the chart
import { render } from 'react-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import chartData from './ChartData';
import ChartDesign from './ChartDesign';




const ShareDetails = () => {
    const apiKey = getApiKey()
    const [shares, setShares] = useState([])
    const [selectedShare, setSelectedShare] = useState("MSFT")
    const [selectedTime, setSelectedTime] = useState ("DAILY")
    const [shareData, setShareData] = useState([])
    const [chartHeadline, setChartHeadline] = useState(selectedShare)
    
    const defaultSymbol = "MSFT"
    const defaultTimeFrame = "WEEKLY"
    const getShareData = (symbol, timeFrame) => {
        const inputSymbol = symbol ? symbol : defaultSymbol
        const inputTimeFrame = timeFrame ? timeFrame : defaultTimeFrame

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
        const sharesApiURL = `https://www.alphavantage.co/query?function=TIME_SERIES_${inputTimeFrame}&symbol=${inputSymbol}&apikey=${apiKey}`
        fetch(sharesApiURL)
        .then(respose => respose.json())
        .then(data => setShareData(data[timeFrameURL()]))
        let sharesDataArr = []
        for (let key in shareData) {
    
            if (shareData.hasOwnProperty(key)) {
                sharesDataArr.push([parseInt((new Date(key).getTime() / 1000).toFixed(0))].concat(Object.values(shareData[key])))
            }
            
        }
        console.log(sharesDataArr)
    }
        
    
    useEffect(() => getShareData(defaultSymbol, defaultTimeFrame), []);
    
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
        // setSelectedTime(event.target.value)
        const shareToGet = selectedShare
        const timeFrameToGet = selectedTime
        getShareData(shareToGet, timeFrameToGet)

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
        <ChartDesign selectedShare={chartHeadline} shareData={shareData}/>
        </div>
        </>)
};

export default ShareDetails;
