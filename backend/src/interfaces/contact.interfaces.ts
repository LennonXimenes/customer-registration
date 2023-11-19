import { z } from "zod";
import { contactCreateSchema, contactSchema } from "../schemas";
import { Contact } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type iContact = z.infer<typeof contactSchema>;

type iContactCreate = z.infer<typeof contactCreateSchema>;
type iContactRead = Array<Contact>;
type iContactUpdate = DeepPartial<Contact>;

type iContactRepo = Repository<Contact>;

export { iContact, iContactCreate, iContactRead, iContactUpdate, iContactRepo }