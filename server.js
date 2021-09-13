const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

const port = 8080;

app.set("view engine", "ejs");
app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createdAt: Date.now(),
      description: "Test Description!",
    },
  ];
  res.render("index", { articles });
});

// app.listen(6000);
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
