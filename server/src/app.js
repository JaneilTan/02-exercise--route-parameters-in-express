const express = require("express");
const cors = require("cors");
const app = express();
const properties = require("./properties.json");

app.use(cors());
app.use(express.json());

app.get("/properties", (request, response) => {
  return response.status(200).send(properties);
});

module.exports = app;
