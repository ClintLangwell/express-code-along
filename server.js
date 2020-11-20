"use strict";
//require the Express module, body-parser, and cors
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//require our routes.js file
const routes = require("./routes");
//creates an instance of an Express server
const app = express();

// Enable Cross Origin Resoursce Sharing so this API
// can be used from web-apps other domais.
app.use(cors());
// allow Post and Put requests to use JSON bodies
app.use(bodyParser.json());
// use the routes file
app.use("/", routes);

//define the port
const port = 3000;
//run the server
app.listen(port, () => {
  console.log(`Listening on port: ${port}.`);
});
