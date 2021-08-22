import express from "express";
import blogRouter from "./blog";
import homeRouter from "./home";
import feedRouter from "./feed";

const router = express.Router();

router.use("/", homeRouter);
router.use("/blog", blogRouter);
router.use("/feed", feedRouter);

export default router;
