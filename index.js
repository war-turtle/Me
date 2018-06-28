const express = require('express');

const app = express();

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

app.listen(5000, () => {
  console.log('server is listen at port 5000');
});
