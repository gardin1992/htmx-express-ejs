import express from "express";

import { FeedController, NewsController } from "./../../controllers/feed";

const router = express.Router();

const feedController = new FeedController();
router.get("", feedController.index);

//  SSE
router.get("/news_updates", feedController.newsUpdate);

const newsController = new NewsController();
router.get("/news", newsController.findAll);

export default router;
