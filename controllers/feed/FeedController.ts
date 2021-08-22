import { Request, Response } from "express";

export default class FeedController {
  index = async function index(request: Request, response: Response) {
    response.render("feed/index", { title: "Feed" });
  };
}
