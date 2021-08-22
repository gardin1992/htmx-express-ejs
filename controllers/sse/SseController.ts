import { Request, Response } from "express";

let clients: any[] = [];
let facts: string[] = [];

const sendEventsToAll = async (newFact: any) => {
  clients.forEach((client) => {
    // client.response.render("feed/news/item", {
    //   news: newFact,
    //   layout: false,
    // });

    client.response.write(`data: ${JSON.stringify(newFact)}\n\n`);
  });
};

export default class SseController {
  async status(request: Request, response: Response) {
    response.json({ clients: clients.length });
  }

  async eventsHandler(request: Request, response: Response) {
    const headers = {
      "Content-Type": "text/event-stream",
      Connection: "keep-alive",
      "Cache-Control": "no-cache",
    };
    response.writeHead(200, headers);

    const data = `data: ${JSON.stringify(facts)}\n\n`;

    response.write(data);

    const clientId = Date.now();

    const newClient = {
      id: clientId,
      response,
    };

    clients.push(newClient);

    request.on("close", () => {
      console.log(`${clientId} Connection closed`);
      clients = clients.filter((client) => client.id !== clientId);
    });
  }

  async addFact(request: Request, response: Response) {
    const newFact = request.body;
    facts.push(newFact);
    response.json(newFact);
    return sendEventsToAll(newFact);
  }

  async news(request: Request, response: Response) {
    response.render("feed/news/list", {
      newsItems: [...facts].reverse(),
      layout: false,
      title: "Agora vai",
    });
  }
}

type FactProp = {
  created: string;
};

const sortableByCreated = (array: any[]) => {};
