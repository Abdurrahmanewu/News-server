const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const catagories = require("./Data/category.json");
const news = require("./Data/news.json");

app.get("/", (req, res) => {
  res.send("news API is running");
});
app.get("/news-catagories", (req, res) => {
  res.send(catagories);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.listen(port, () => {
  console.log("server on port ", port);
});
