const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();

// const bodyParser = require("body-parser");
app.use(express.json());
// import routes
const postRouter = require("./routes/posts");

// middlewares
// app.use(bodyParser.json());
app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Hello From Darren !");
});

// connect the mongo db
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to database");
});

app.listen(7070, () => {
  console.log(`listening on port 7070`);
});
