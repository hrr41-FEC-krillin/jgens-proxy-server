const express = require('express');
const proxy = require('express-http-proxy');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.use('/', proxy('localhost:3100'));


app.listen(port, () => console.log(`proxy server on ${port} is here!`));
