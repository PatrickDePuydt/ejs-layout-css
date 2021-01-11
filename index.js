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

app.listen(3000);