const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

// app.listen(6000);
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
