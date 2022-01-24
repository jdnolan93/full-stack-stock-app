

let testObj = {
    "_id": "61eec1646ce01a79dc50a67d",
"name": "APPL",
"data": {
"2022-01-21": {
"1. open": "171.5100",
"2. high": "172.5400",
"3. low": "162.3000",
"4. close": "162.4100",
"5. volume": "397684401"
},
"2022-01-14": {
"1. open": "169.0800",
"2. high": "177.1800",
"3. low": "168.1700",
"4. close": "173.0700",
"5. volume": "422454950"
},
"2022-01-07": {
"1. open": "177.8300",
"2. high": "182.9400",
"3. low": "171.0300",
"4. close": "172.1700",
"5. volume": "482162362"
}
}
}


let arr = []


for (let key in testObj) {
    
    if (testObj.hasOwnProperty(key)) {
        let prices = Object.values(testObj[key])
        prices = prices.map(Number)
        arr.push([parseInt((new Date(key).getTime()).toFixed(0))].concat(prices))
        
    }
}

      console.log(arr.reverse())