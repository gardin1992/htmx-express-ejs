import express from "express";
import UsersController from "../../app/controllers/UsersController";

const router = express.Router();

const userController = new UsersController();
router.get("/users", userController.index);
router.get("/users/:id", userController.show);
router.post("/users", userController.store);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.destroy);

export default router;
