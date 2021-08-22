import { Request, Response } from "express";

export default class HomeController {
  index = async function index(request: Request, response: Response) {
    response.render("index", { title: "SPA" });
  };
}
