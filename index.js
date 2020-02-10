require('dotenv').config();
const express = require('express');
const app = express();

// ROUTES
require('./routes/index')(app);

// SERVER
require('./server/server')(app);