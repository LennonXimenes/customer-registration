import { z } from "zod";

const customerSchema = z.object({
    id: z.number().positive(),
    fullName: z.string().max(60),
    email: z.string().email().max(45),
    password: z.string().max(120),
    phone: z.string().max(11),
    createdAt: z.string()
});

const customerCreateSchema = customerSchema.omit({ id: true });
const customerUpdateSchema = customerCreateSchema.partial();

export { customerCreateSchema, customerUpdateSchema };