let testObj = {"2022-01-21": {
    "1. open": "134.0700",
    "2. high": "142.2000",
    "3. low": "127.9700",
    "4. close": "129.3500",
    "5. volume": "88578938"
    },
    "2021-12-31": {
    "1. open": "118.2500",
    "2. high": "134.9900",
    "3. low": "116.5600",
    "4. close": "133.6600",
    "5. volume": "113930079"
    },
    "2021-11-30": {
    "1. open": "125.0500",
    "2. high": "127.2900",
    "3. low": "114.5600",
    "4. close": "117.1000",
    "5. volume": "119252012"
    }}
let arr = []


for (let key in testObj) {
    
    if (testObj.hasOwnProperty(key)) {
        let prices = Object.values(testObj[key])
        prices = prices.map(Number)
        arr.push([parseInt((new Date(key).getTime()).toFixed(0))].concat(prices))
        
    }
}

      console.log(arr)