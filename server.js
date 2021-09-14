const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.use("/articles", articleRouter);

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

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
