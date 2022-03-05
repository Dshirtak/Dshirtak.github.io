const express = require('express');
const product = require('../routes/product');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/product', product);
  }