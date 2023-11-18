import { Router } from "express";
import middlewares from "../middlewares";
import contactControllers from "../controllers/contact.controllers.";
import { contactCreateSchema, contactUpdateSchema } from "../schemas";

export const contactRouter: Router = Router();

contactRouter.get("/",
    contactControllers.readContact
);

contactRouter.get("/:id",
    middlewares.verifyContact,
    contactControllers.retrieveContact
);

contactRouter.post("/:id",
    middlewares.verifyId,
    middlewares.validateBody(contactCreateSchema),
    contactControllers.createContact
);

contactRouter.patch("/:id",
    middlewares.validateBody(contactUpdateSchema),
    middlewares.verifyContact,
    contactControllers.updateContact
);

contactRouter.delete("/:id",
    middlewares.verifyContact,
    contactControllers.deleteContact
);