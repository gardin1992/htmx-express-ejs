import express from "express";
import faker from "faker/locale/pt_BR";
import { v4 as uuid } from "uuid";

const router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index", { title: "Express" });
});

router.get("/blog", function (req, res) {
  const posts = [];

  let postsNumber = 0;
  while (postsNumber < 10) {
    posts.push({
      id: uuid(),
      name: `${faker.name.firstName()}  ${faker.name.lastName()}`,
      content: faker.hacker.phrase(),
    });

    postsNumber++;
  }

  console.log(posts);

  res.render("blog", { title: "Blog", posts, layout: false });
});

export default router;
