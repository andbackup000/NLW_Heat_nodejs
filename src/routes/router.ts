import { Router } from "express";
import { authenticateUserController } from "../controller/authenticateUserController";
import { createMessageController } from "../controller/createMessageController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const router = Router();

router.post('/authenticate', new authenticateUserController().handle);

router.post(
    '/messages', 
    ensureAuthenticated, 
    new createMessageController().handle
);

export { router }