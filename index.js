const express = require('express');
const app = express();

require('dotenv').config();


//set up for future deployment:
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.use(express.static('public'));


app.listen(port, () => console.log(`proxy server on ${port} is here!`));
