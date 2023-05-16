const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const energyConsumptionRouter = require("./routes/energy_consumption");
const userRouter = require("./routes/user");
// const mentorRouter = require('./routes/mentor');
const salesRouter = require("./routes/sales");

app.use("/energy_consumption", energyConsumptionRouter);
app.use("/user", userRouter);

// app.use("/mentor", mentorRouter);
app.use("/sales", salesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
