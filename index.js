require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')

// CONFIG
app.use(cors({
  origin: 'https://portfolio-af45a.web.app/*',
  methods: ['GET']
}));

require('./config/parser')(app);

// ROUTES
require('./routes/index')(app);

// SERVER
require('./server/server')(app);