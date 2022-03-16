const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  var title = 'My Home Page';
  res.render('pages/index',{'title':title});
});

app.get('/Marcus', (req, res) => {
  var title = 'Marcus Aurelius';
  res.render('pages/Marcus',{'title':title});
});

app.get('/Diogenes', (req, res) => {
  var title = 'Diogenes';
  res.render('pages/Diogenes',{'title':title});
});

app.get('/schopenhauer', (req, res) => {
  var title = 'arthur schopenhauer';
  res.render('pages/schopenhauer',{'title':title});
});

app.get('/Nietzsche', (req, res) => {
  var title = 'Friedrich Nietzsche';
  res.render('pages/Nietzsche',{'title':title});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

