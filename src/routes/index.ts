import express from "express";
import spaRouter from "./spa";
import blogRouter from "./blog";
import feedRouter from "./feed";
import apiRouter from "./api";

const router = express.Router();

router.use("", spaRouter);
router.use("/blog", blogRouter);
router.use("/feed", feedRouter);
router.use("/api", apiRouter);

export default router;
