const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;