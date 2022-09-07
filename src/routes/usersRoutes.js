import express  from "express";
import userController from "../controllers/usersController.js";

const router = express.Router();

router
    .get("/api/v1/users", userController.getUsers)
    .get("/api/v1/users/search/", userController.getUserByName)
    .get("/api/v1/users/:id", userController.getUserById)
    .post("/api/v1/users", userController.registerNewUser)
    .put("/api/v1/users/:id", userController.updateUser)
    .delete("/api/v1/users/:id", userController.deleteUser)


export default router;