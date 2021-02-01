const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const fetchPokemon = require('./src/functions/fetchPokemon');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.render('index', { dado: { name: 'vazio', img: '#' } });
});

app.post('/', async (req, res) => {
  const { id } = req.body;
  const result = await fetchPokemon(id);

  res.render('index', {
    dado: {
      name: result.name,
      img: result.sprites.other.dream_world.front_default,
    },
  });
});

app.listen(8080);
