import express from "express";
import { fake } from "faker";
import faker from "faker/locale/pt_BR";
import { v4 as uuid } from "uuid";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

router.get("/blog", function (req, res) {
  const posts = [];

  console.log("passe aqui");

  let postsNumber = 0;
  while (postsNumber < 10) {
    posts.push({
      id: uuid(),
      title: faker.lorem.words(),
      author: `${faker.name.firstName()}  ${faker.name.lastName()}`,
      image: faker.image.image(),
      content: faker.lorem.paragraphs(),
      created: new Date(faker.date.past()),
    });

    postsNumber++;
  }

  res.render("blog/index", {
    title: "Blog",
    posts,
    layout: !req.headers["hx-request"],
  });
});

export default router;
