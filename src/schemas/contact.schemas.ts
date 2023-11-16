import { z } from "zod";
import { customerWithoutPassSchema } from "./customer.schemas";

const contactSchema = z.object({
    id: z.number().positive(),
    fullName: z.string().max(60),
    email: z.string().email().max(45),
    phone: z.string().max(11),
    createdAt: z.string(),
    customer: customerWithoutPassSchema
});

const contactCreateSchema = contactSchema.omit({ id: true, createdAt: true, customer: true });
const contactUpdateSchema = contactCreateSchema.partial();

export { contactSchema, contactCreateSchema, contactUpdateSchema };