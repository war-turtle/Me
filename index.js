const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('pages/index', {
    about: 'purple white-text',
    resume: '',
    works: ''
  });
});

app.get('/works', (req, res) => {
  res.render('pages/works', {
    about: '',
    resume: '',
    works: 'purple white-text'
  });
});

app.listen(5000, () => {
  console.log('server is listen at port 5000');
});
