require('dotenv').config();
const express = require('express');
const app = express();

// CONFIG
const cors = require('cors')

const corsOptions = {
  origin: 'https://portfolio-af45a.web.app'
}

cors(corsOptions)

require('./config/parser')(app);

// ROUTES
require('./routes/index')(app);

// SERVER
require('./server/server')(app);