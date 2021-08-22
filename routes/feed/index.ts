import express from "express";

import { FeedController } from "./../../controllers/feed";

const router = express.Router();

const feedController = new FeedController();
router.get("", feedController.index);

export default router;
