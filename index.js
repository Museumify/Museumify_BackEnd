'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const client = require('./client'); // DB instance

const { PORT } = require('./config');

// Error Handlers
const notFound = require('./Error_handlers/404');
const internalServerError = require('./Error_handlers/500');
const artRoutes = require('./routes/art.routes');
const generalRoutes = require('./routes/general.routes');

//==============================================
const app = express();
app.use(cors());

// Routes
//===============================
app.use(generalRoutes);
app.use('/art', artRoutes); //

//==============================================
// MiddleWares

app.use(notFound);
app.use(internalServerError);

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});


