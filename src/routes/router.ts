import { Router } from "express";
import { authenticateUserController } from "../services/authenticateUserController";

const router = Router();

router.post('/authenticate', new authenticateUserController().handle);

export { router }