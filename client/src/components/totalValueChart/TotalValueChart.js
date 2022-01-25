import React, {useEffect, useState} from 'react';
import TotalValueChartDesign from './TotalValueChartDesign';
import { getShares } from '../../SharesService';
import { render } from "react-dom";


const TotalValueChart = ({shares}) => {
    
    
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

    const getShareData = async (symbol) => {
        const sharesApiURL = `http://localhost:5000/api/sharesData/find/${symbol}`
        return fetch(sharesApiURL)
        .then(respose => respose.json())
        .then((data) => 
            convertDataForChart(data["data"]))
        .catch(err=>console.log(err)) 
    }

    const getTotalValueData = (shares) => {
        let finalArrData = []
        const sharesNodes = shares.map((share, index) => {
            getShareData(share.symbol).then((result) => {
                    result.map((listItem) => {
                        for(let i=1; i <= listItem.length; i++ ){
                            listItem[i]*=share.noOfShares
                    }

                }) 
                
            })
            
        })
    }

    // getTotalValueData(shares)
    



  return <>
  <TotalValueChartDesign />
  </>
  
};

export default TotalValueChart;
