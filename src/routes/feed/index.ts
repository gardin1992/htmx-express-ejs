import express from "express";
import { FeedController } from "../../module/controllers";

const router = express.Router();

const feedController = new FeedController();

router.get("/sse/posts", feedController.ssePosts);
router.post("/sse/posts", feedController.sseAddPost);
router.get("/posts", feedController.posts);
router.get("/status", feedController.status);

export default router;
