use sharesApp;

db.dropDatabase();

db.shares.insertMany([
    {
        name: 'Microsoft',
        symbol: 'MSFT',
        noOfShares: 50
    },
    {
        name: 'IBM',
        symbol: 'IBM',
        noOfShares: 40
    },
    {
        name: 'Apple',
        symbol: 'AAPL',
        noOfShares: 50
    },
    {
        name: 'Apple',
        symbol: 'AAPL',
        noOfShares: 50
    }

]);