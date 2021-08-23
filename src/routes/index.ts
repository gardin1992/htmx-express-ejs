import express from "express";
import spaRouter from "./spa";
import blogRouter from "./blog";
import feedRouter from "./feed";

const router = express.Router();

router.use("", spaRouter);
router.use("/blog", blogRouter);
router.use("/feed", feedRouter);

export default router;
