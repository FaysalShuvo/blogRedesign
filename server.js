const express = require("express");
const mongoose = require("mongoose");
const articleRouter = require("./routes/articles");
const app = express();

const port = 8080;

mongoose.connect("mongodb://127.0.0.1:27017/blog");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  const articles = [
    {
      title: "001 Test Article",
      createdAt: new Date(),
      description: "001 Test Description!",
    },
    {
      title: "002 Test Article",
      createdAt: new Date(),
      description: "002 Test Description!",
    },
  ];
  res.render("articles/index", { articles });
});

app.use("/articles", articleRouter);
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
