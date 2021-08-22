import express from "express";
import blogRouter from "./blog";
import homeRouter from "./home";

const router = express.Router();

router.use("/", homeRouter);
router.use("/blog", blogRouter);

export default router;
