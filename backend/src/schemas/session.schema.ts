import { customerSchema } from "./customer.schemas";

const sessionCreate = customerSchema.pick({
    email: true,
    password: true
});

export { sessionCreate };