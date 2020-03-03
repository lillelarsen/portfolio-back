require('dotenv').config();
const express = require('express');
const app = express();

// CONFIG 
require('./config/parser')(app);

// ROUTES
require('./routes/index')(app);

// SERVER
require('./server/server')(app);