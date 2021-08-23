import express from "express";
import spaRouter from "./spa";

const router = express.Router();

router.use("", spaRouter);

export default router;
