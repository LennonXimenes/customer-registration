import { Router } from "express";
import customerControllers from "../controllers/customer.controllers";
import middlewares from "../middlewares";
import { customerCreateSchema, customerUpdateSchema } from "../schemas";

export const customerRouter: Router = Router();

customerRouter.use("/:id", middlewares.verifyId);

customerRouter.get("/",
    customerControllers.readCustomer
);

customerRouter.get("/:id",
    customerControllers.retrieveCustomer
);

customerRouter.get("/:id/contacts",
    customerControllers.retrieveCustomerWithContacts
);

customerRouter.post("/",
    middlewares.validateBody(customerCreateSchema),
    customerControllers.createCustomer
);

customerRouter.patch("/:id",
    middlewares.validateBody(customerUpdateSchema),
    customerControllers.updateCustomer
);

customerRouter.delete("/:id",
    customerControllers.deleteCustomer
);