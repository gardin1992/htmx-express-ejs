import faker from "faker/locale/pt_BR";
import { v4 as uuid } from "uuid";
import { Request, Response } from "express";

export default class FeedController {
  index = async function index(request: Request, response: Response) {
    response.render("feed/index", { title: "Social Board" });
  };
  newsUpdate = async function newsUpdate(request: Request, response: Response) {
    console.log("request", request);
    const news = [];

    let newsNumber = 0;
    while (newsNumber < 10) {
      news.push({
        id: uuid(),
        avatar: faker.image.avatar(),
        author: `${faker.name.firstName()}  ${faker.name.lastName()}`,
        content: faker.lorem.words(255),
        created: new Date(faker.date.past()),
      });

      newsNumber++;
    }

    response.json(news);
    // response.render("feed/news_updates", );
  };
}
