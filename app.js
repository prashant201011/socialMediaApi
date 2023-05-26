const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const adminRouter = require("./router/admin");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(adminRouter);

mongoose
  .connect(
    "mongodb+srv://prashantsingh201011:prashant@cluster0.pm93uci.mongodb.net/test1"
  )
  .then((result) => {
    app.listen(3000);
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
