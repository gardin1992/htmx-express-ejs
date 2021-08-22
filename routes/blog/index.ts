import express from "express";

import { BlogController, PostsController } from "./../../controllers/blog";

const router = express.Router();

const blogController = new BlogController();
router.get("", blogController.index);

const postsController = new PostsController();
router.get("/posts", postsController.findAll);

export default router;
