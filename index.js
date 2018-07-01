const express = require('express');

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

app.get('/try', (req, res) => {
  res.render('pages/try');
});

app.listen(port, () => {
  console.log('server is listen at port ' + port);
});
