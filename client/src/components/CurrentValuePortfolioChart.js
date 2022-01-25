import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";


const CurrentValuePortfolioChart = ({ shareObjects }) => {

  const shareName = shareObjects.map((s) => s.name);
  const noOfShare = shareObjects.map((s) => s.noOfShares);
  const currentPrice = shareObjects.map((s) => s.currentPrice);

  const totalValue = noOfShare.reduce(function (r, a, i) {
    return r + a * currentPrice[i];
  }, 0);
  const percent = shareObjects.map(
    (s) => (s.noOfShares * s.currentPrice * 100) / totalValue
  );

  const arr = [];
  for (let i = 0; i < shareObjects.length; i++) {
    arr.push({ name: shareName[i], y: percent[i] });
  }


  // console.log(arr);

  console.log(shareName);
  console.log(noOfShare);
  console.log(currentPrice);
  console.log(totalValue);
  console.log(percent);
  console.log(shareObjects.length);

  //options object
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Current shares portfolio. January, 2022",
    },
    subtitle: {
      text: 'Click the columns to view versions. Source: <a href="http://highcharts.com" target="_blank">Highcharts.com</a>',
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Total percent share",
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        pointPadding: 0.4,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: "{point.y:.1f}%",
        },
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total value<br/>',
    },
    // option.series[0].data[x].name
    // option.series[0].data[x].y
    series: [
      {
        name: "Shares",
        colorByPoint: true,
        data: arr
      },
    ],
  };
 


  console.log(options.series[0].data);

  return (
    <div>
       <h2>total value</h2>
       {totalValue}

      <h2>Highcharts</h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CurrentValuePortfolioChart;
