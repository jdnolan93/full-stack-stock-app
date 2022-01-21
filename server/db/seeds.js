use sharesApp;

db.dropDatabase();

db.shares.insertMany([
    {
        name: 'Microsoft',
        symbol: 'MSFT',
        noOfShares: 50
    },
    {
        name: 'Facebook',
        symbol: 'FB',
        noOfShares: 40
    },
    {
        name: 'CodeClan',
        symbol: 'CCFTW',
        noOfShares: 50
    }
]);