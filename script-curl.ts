import faker from "faker/locale/pt_BR";
import { v4 as uuid } from "uuid";
import { exec } from "child_process";

const feedNews = {
  id: uuid(),
  avatar: faker.image.avatar(),
  author: `${faker.name.firstName()}  ${faker.name.lastName()}`,
  content: faker.lorem.words(2),
  created: new Date(faker.date.past()),
};

let script = `-X POST -H "Content-Type: application/json"  -d '`;
script += JSON.stringify(feedNews);
script += `' -s http://localhost:3000/feed/sse/posts`;

console.log("curl " + script);
