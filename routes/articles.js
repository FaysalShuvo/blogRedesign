const express = require("express");
const Article = require("./../models/article");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("articles/new", { article: new Article() });
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const article = await Article.findOne({ slug: req.params.slug });
    if (article == null) res.redirect("/");
    res.render("articles/show", { article });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  let article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
  });
  try {
    article = await article.save();
    res.redirect(`/articles/${article.slug}`);
  } catch (error) {
    console.log(error);
    res.render("articles/new", { article });
  }
});
module.exports = router;
