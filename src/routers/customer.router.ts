import { Router } from "express";
import customerControllers from "../controllers/customer.controllers";
import middlewares from "../middlewares";
import { customerCreateSchema, customerUpdateSchema } from "../schemas";

export const customerRouter: Router = Router();

customerRouter.use("/:customerId", middlewares.verifyId);

customerRouter.get("/",
    customerControllers.readCustomer
);

customerRouter.get("/:customerId",
    customerControllers.retrieveCustomer
);

customerRouter.post("/",
    middlewares.validateBody(customerCreateSchema),
    customerControllers.createCustomer
);

customerRouter.patch("/:customerId",
    middlewares.validateBody(customerUpdateSchema),
    customerControllers.updateCustomer
);

customerRouter.delete("/:customerId",
    customerControllers.deleteCustomer
);