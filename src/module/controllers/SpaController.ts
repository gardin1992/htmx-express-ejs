import { Request, Response } from "express";

export default class SpaController {
  async index(request: Request, response: Response) {
    response.render("spa/index", { title: "SPA" });
  }

  async blog(request: Request, response: Response) {
    response.render("blog/index", { title: "Blog" });
  }

  async feed(request: Request, response: Response) {
    response.render("feed/index", { title: "Feed" });
  }
}
