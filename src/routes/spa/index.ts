import express from "express";
import { SpaController } from "../../app/controllers";

const router = express.Router();

const spaController = new SpaController();

router.get("", spaController.index);
router.get("/blog", spaController.blog);
router.get("/feed", spaController.feed);

export default router;
