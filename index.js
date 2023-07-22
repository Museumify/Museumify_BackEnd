"use strict";

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const client = require("./client"); // DB instance

const { PORT } = require("./config");

// Error Handlers
const notFound = require("./Error_handlers/404");
const internalServerError = require("./Error_handlers/500");
const artRoutes = require("./routes/art.routes");
const generalRoutes = require("./routes/general.routes");

//==============================================
const app = express();
app.use(cors());
app.use(express.json());

// Routes
//===============================
app.use(artRoutes); 
app.use(generalRoutes);


//==============================================
// MiddleWares

app.use(notFound);
app.use(internalServerError);

client.connect().then(() => {
  try {
    app.listen(PORT, () => {
      console.log(`Listening at ${PORT}`);
    });
  } catch (e) {
    next(`error at listening ${e}`);
  }
});
