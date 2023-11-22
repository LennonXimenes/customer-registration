import { Router } from "express";
import { sessionCreate } from "../schemas";
import sessionController from "../controllers/session.controller";
import middlewares from "../middlewares";

export const sessionRouter: Router = Router();

sessionRouter.post("/",
    middlewares.validateBody(sessionCreate),
    sessionController.loginSession
);