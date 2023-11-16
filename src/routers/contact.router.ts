import { Router } from "express";
import middlewares from "../middlewares";
import contactControllers from "../controllers/contact.controllers.";
import { contactCreateSchema, contactUpdateSchema } from "../schemas";

export const contactRouter: Router = Router();

contactRouter.use("/:id", middlewares.verifyId);

contactRouter.get("/",
    contactControllers.readContact
);

contactRouter.get("/:id",
    contactControllers.retrieveContact
);

contactRouter.post("/:id/customer",
    middlewares.validateBody(contactCreateSchema),
    contactControllers.createContact
);

contactRouter.patch("/:id",
    middlewares.validateBody(contactUpdateSchema),
    contactControllers.updateContact
);

contactRouter.delete("/:id",
    contactControllers.deleteContact
);