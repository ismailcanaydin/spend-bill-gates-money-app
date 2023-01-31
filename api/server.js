const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

const products = require('./products.json')

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

app.all('*', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/products', (req, res) => res.send(products));

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));