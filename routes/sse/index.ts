import express from "express";
import SseController from "../../controllers/sse/SseController";

const sseController = new SseController();

const router = express.Router();

router.use("/status", sseController.status);
router.get("/events", sseController.eventsHandler);
router.post("/fact", sseController.addFact);
router.get("/news", sseController.news);

export default router;
