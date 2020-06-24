'use strict';

require('dotenv').config();
require('ejs');
const express = require('express');
const app = express();
const cors = require('cors');
const pg = require('pg');
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')
app.get('/', (request, response) => {
  console.log('still working')
  response.render('index')
})
app.post('/input', (request, response) => {
  let round = 1;
  let score = 0;
  let selectedColor = request.body.gameBoard;
  console.log('request query', selectedColor)

  if (selectedColor === 'blue') {
    score += score + 1;
  }

  console.log('backend', score)
  response.status(200).render('index', { score: score, round: round })



})

//Server is running, css is terrible, but it is a start. I don't think I want to do much more with the server until I get some solid JS running and click functionality for the colors. Man do they look bad :)

//Update: having a terrible time styling, not sure if it is grid, or certain properties need to come before others, but border width and color for everything seems to be broken. Radius and module look intact. 


//So, I have determined that while I can make the colors respond to the server, it resets the couynt and truthy values are not quite working the way I think they should on render. From here I think I need to get a temp arr going with js and then compare it with a random array genertaed from the server. That way I think I can get the counts and scores to work on a front end level before they ever get sent back as a post. Suivez Moi









app.listen(PORT, () => {
  console.log(`Simon Says port ${PORT} has the high score...`)
})