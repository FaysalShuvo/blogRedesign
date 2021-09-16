const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/article");
const articleRouter = require("./routes/articles");
const app = express();

const port = 8080;

mongoose.connect("mongodb://127.0.0.1:27017/blog");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  res.render("articles/index", { articles });
});
app.use("/articles", articleRouter);
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
