const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users.js");
const authRoute = require("./routes/auth.js");

// dotenv configuration
dotenv.config();

// mongoose connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("mongoDB connected successfully"))
  .catch((err) => console.error("mongoDB fail to connect", err));

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(5000, () => {
  console.log("The backend is listening and here we go!.");
});
