import { Router } from "express";
import customerControllers from "../controllers/customer.controllers";
import middlewares from "../middlewares";
import { customerCreateSchema } from "../schemas";

export const customerRouter: Router = Router();

customerRouter.get("/",
    customerControllers.readCustomer
);

customerRouter.post("/",
    middlewares.validateBody(customerCreateSchema),
    customerControllers.createCustomer
);