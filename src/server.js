require('dotenv').config();
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;


configViewEngine(app);


app.listen(port,)