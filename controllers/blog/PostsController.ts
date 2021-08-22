import faker from "faker/locale/pt_BR";
import { v4 as uuid } from "uuid";
import { Request, Response } from "express";

export default class PostsController {
  findAll = async function findAll(request: Request, response: Response) {
    const posts = [];

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

    response.render("blog/posts/list", {
      posts,
      layout: false,
    });
  };
}
