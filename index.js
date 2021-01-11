const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();
app.use(ejsLayouts);

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('home');
});

app.get('/air', (req, res) => {
  res.render('air', {airElements: ['Movement', 'Creativity', 'Action', 'Adventure', 'Exciting', 'Easily Provoked'], symbols: ['Leo']})
});

app.get('/water', (req, res) => {
  res.render('water', {waterElements: ['Private', 'Mysterious', 'Psychic', 'Charming', 'Emotional', 'Sensitive']})
});

app.get('/air/gemini', (req, res) => {
  res.render('leo')
});


app.get('/fire', (req, res) => {
  res.render('fire', {fireElements: ['Passionate', 'Str`ong Emotions', 'Tempremental', 'Energetic', 'Accomplished', 'Interesting']})
});


app.get('/earth', (req, res) => {
  res.render('earth', {earthElements: ['Grounded', 'Helpful', 'Practical', 'Materialistic', 'Dependable']})
});



app.listen(3000);