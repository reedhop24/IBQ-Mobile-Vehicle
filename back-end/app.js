const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const post = require('./routes/postVeh');
const get = require('./routes/postQuote');
const mongoose = require('mongoose');
require('./services/cache');


mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true }, () => {
        console.log('connected to db');
});

app.use(bodyParser.json());

app.use('/quote', post);

app.use('/find', get);

app.listen(port, () => console.log('listening on'))