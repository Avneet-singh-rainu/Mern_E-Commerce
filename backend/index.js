const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const products = require("./controller/products");

app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGOURL).then(() => {
  console.log("connected to Mongoose");
});

app.use("/api/users", products);

app.listen(3000, () => {
  console.log("server connected to 3000 port");
});
