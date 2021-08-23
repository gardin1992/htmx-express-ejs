import express from "express";
import { BlogController } from "../../module/controllers";

const router = express.Router();

const blogController = new BlogController();

router.get("/posts", blogController.posts);

export default router;
