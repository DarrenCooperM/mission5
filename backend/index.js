const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();
const cors = require("cors"); // We use this to accept HTTP requests from a specific recipient (or in this case with no recipient defined, everybody)

// const bodyParser = require("body-parser");
app.use(express.json());
app.use(cors());
// import routes
const postRouter = require("./routes/posts");
const contentRouter = require("./routes/contents");
const subscribeRouter = require("./routes/subscription");

// middlewares
// app.use(bodyParser.json());
// importing endpoints from routes
app.use("/posts", postRouter);
app.use("/content", contentRouter);
app.use("/subscription", subscribeRouter);
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
