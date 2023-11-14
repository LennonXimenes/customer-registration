import { z } from "zod";
import { customerCreateSchema, customerUpdateSchema } from "../schemas";
import { Customer } from "../entities";
import { Repository } from "typeorm";

type iCustomerCreate = z.infer<typeof customerCreateSchema>;
type iCustomerRead = Array<Customer>;
type iCustomerUpdate = z.infer<typeof customerUpdateSchema>;

type iCustomerRepo = Repository<Customer>;

export { iCustomerCreate, iCustomerRead, iCustomerUpdate, iCustomerRepo }