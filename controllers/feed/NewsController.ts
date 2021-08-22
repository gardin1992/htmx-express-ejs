import faker from "faker/locale/pt_BR";
import { v4 as uuid } from "uuid";
import { Request, Response } from "express";

export default class NewsController {
  async item(request: Request, response: Response) {
    console.log(request);
  }
  findAll = async function findAll(request: Request, response: Response) {
    const newsItems = [];

    let newsNumber = 0;
    while (newsNumber < 10) {
      newsItems.push({
        id: uuid(),
        avatar: faker.image.avatar(),
        author: `${faker.name.firstName()}  ${faker.name.lastName()}`,
        content: faker.lorem.words(10),
        created: new Date(faker.date.past()),
      });

      newsNumber++;
    }

    response.render("feed/news/list", {
      posts: newsItems,
      layout: false,
    });
  };
}
