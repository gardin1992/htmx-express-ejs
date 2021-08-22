import { Request, Response } from "express";

export default class BlogController {
  index = async function index(request: Request, response: Response) {
    response.render("blog/index", { title: "HTMX Posts" });
  };
}
