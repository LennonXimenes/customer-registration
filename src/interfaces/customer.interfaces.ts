import { z } from "zod";
import { customerCreateSchema } from "../schemas";
import { Customer } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type iCustomerCreate = z.infer<typeof customerCreateSchema>;
type iCustomerRead = Array<Customer>;
type iCustomerUpdate = DeepPartial<Customer>;

type iCustomerRepo = Repository<Customer>;

export { iCustomerCreate, iCustomerRead, iCustomerUpdate, iCustomerRepo }