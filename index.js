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
app.use(generalRoutes);
app.use(artRoutes); 

//==============================================
// MiddleWares

app.use(notFound);
app.use(internalServerError);

client.connect().then(() => {
  try {
    app.listen(3001, () => {
      console.log("Listening at 3001");
    });
  } catch (e) {
    next(`error at listening ${e}`);
  }
});
