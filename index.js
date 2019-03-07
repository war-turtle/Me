const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('pages/index', {
    about: true,
    resume: false,
    works: false
  });
});

app.get('/works', (req, res) => {
  res.render('pages/works', {
    about: false,
    resume: false,
    works: true
  });
});

app.get('/resume', (req, res) => {
  // const file = path.join(__dirname, '/public/images/Resume.pdf');
  // res.download(file);
  const file = path.join(__dirname, 'public/images/Resume.pdf');
  const data = fs.readFileSync(file);
  res.contentType('application/pdf');
  res.send(data);
});

app.get('/try', (req, res) => {
  res.render('pages/try');
});

app.get('*', (req, res) => {
  res.render('pages/404');
});

app.listen(port, () => {
  console.log('server is listen at port ' + port);
});
