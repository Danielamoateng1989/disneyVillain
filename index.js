const express = require("express");
const bodyParser = require("body-parser");
const { getAllVillains, getVillainsBySlug,  saveNewVillain } = require('./controllers/disney-villains')
const app = express();



app.get('/', getAllVillains)

app.get('/:slug', getVillainsBySlug)

app.post('/', bodyParser.json(), saveNewVillain)

app.listen(1337, () => {
    console.log('listening on port 1337');
})


