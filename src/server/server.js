const express = require('express');
const graphqlHttp = require('express-graphql');

const port = 3000;

const app = express();

app.use('/', (req, res, err) => {
    console.log('Winter is coming');
});

app.listen(port);
console.log(`Game of Thrones server running on localhost:${port}`);