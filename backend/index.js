require('./config/config');
const department = require('./models/departments');
const products = require('./models/products');

const promotion = require('./models/promotions');
require('./models/product-promotions');

const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/departments', department);
app.use('/api/products', products);
app.use('/api/promotion', promotion);

const port = process.env.PORT || 4000;
app.listen(port);