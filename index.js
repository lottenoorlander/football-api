const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
// const db = require("./db");
// const Team = require("./team/model");
const teamRouter = require("./team/router");

app.use(jsonParser);
app.use(teamRouter);
app.listen(port, () => console.log("App is listening to port", port));
