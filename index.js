const express require('express');

const app = express();
const port = 3000;

app.static(express.static('public'));

app.listen(port, () => console.log(`proxy server on ${port} is here!`));
