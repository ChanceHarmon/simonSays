'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const pg = require('pg');
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.send('Hello World')
})

//Server is running, css is terrible, but it is a start. I don't think I want to do much more with the server until I get some solid JS running and click functionality for the colors. Man do they look bad :)








app.listen(PORT, () => {
  console.log(`Simon Says port ${PORT} has the high score...`)
})