const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

// dotenv configuration
dotenv.config();

// mongoose connection
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("connected to mongodb");
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

app.listen(5000, () => {
  console.log("The backend is listening and here we go!.");
});
