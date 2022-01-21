use sharesApp;

db.dropDatabase();

db.shares.insertMany([
    {
        name: 'Microsoft',
        symbol: 'MSFT',
        noOfShares: 50
    }
]);