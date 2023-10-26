const express = require("express");
const morgan = require("morgan");
const path = require("path");

const indexRouter = require("./routes/index.router");

const app = express();

//Request Logger
app.use(morgan("dev"));

//Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

//Static middleware
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter); 

module.exports = app;