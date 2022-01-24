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
        noOfShares: 20
    },
    {
        name: 'Apple',
        symbol: 'AAPL',
        noOfShares: 30
    },
    {
        name: 'Ford Motor Company',
        symbol: 'F',
        noOfShares: 40
    },
    {
        name: 'British Petroleum',
        symbol: 'BP',
        noOfShares: 40
    }
]);

db.sharesData.insertMany(
    [
        {
            name: 'TEst',
            symbol: 'Test123',
            noOfShares: 50
        },
    ]
)

