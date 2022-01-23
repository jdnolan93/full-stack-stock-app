import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import HighStock from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import chartData from "./ChartData";

const mockData = chartData()


let groupingUnits = [
  [
    "week", // unit name
    [1] // allowed multiples
  ],
  ["month", [1, 2, 3, 4, 6]]
];

let mockOptions = {
  rangeSelector: {
    selected: 1
  },

  title: {
    text: "AAPL Historical"
  },

  yAxis: [
    {
      labels: {
        align: "right",
        x: -3
      },
      title: {
        text: "OHLC"
      },
      height: "60%",
      lineWidth: 2,
      resize: {
        enabled: true
      }
    },
    {
      labels: {
        align: "right",
        x: -3
      },
      title: {
        text: "Volume"
      },
      top: "65%",
      height: "35%",
      offset: 0,
      lineWidth: 2
    }
  ],

  tooltip: {
    split: true
  },

  series: [
    {
      type: "candlestick",
      data: (function() {
        var ohlcData = [];

        for (var i = 0; i < mockData.length; i++) {
          ohlcData.push([
            mockData[i][0], // the date
            mockData[i][1], // open
            mockData[i][2], // high
            mockData[i][3], // low
            mockData[i][4] // close
          ]);
        }
        return ohlcData;
      })()
    },
    {
      type: "column",
      data: (function() {
        var columnData = [];

        for (var i = 0; i < mockData.length; i++) {
          columnData.push([
            mockData[i][0], // the date
            mockData[i][5] // the volume
          ]);
        }
        return columnData;
      })(),
      yAxis: 1
    }
  ]
};


const ChartDesign = () => {
  return (
    <div className="App">
      {
        <HighchartsReact
          highcharts={HighStock}
          constructorType={"stockChart"}
          options={mockOptions}
        />
      }
    </div>
  );
}

export default ChartDesign