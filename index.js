const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5001;

app.use(cors());

const catagories = require("./Data/catagory.json");
// const news = require("./Data/news.json");

app.get("/", (req, res) => {
  res.send("news API is running after change");
});
app.get("/news-catagories", (req, res) => {
  res.send(catagories);
});
// app.get("/news/:id", (req, res) => {});

app.listen(port, () => {
  console.log("server on port ", port);
});
