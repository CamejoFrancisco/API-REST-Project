import express  from "express";
import userController from "../controllers/usersController.js";

const router = express.Router();

router
    .get("/api/v1/users", userController.listarUsuarios)


export default router;