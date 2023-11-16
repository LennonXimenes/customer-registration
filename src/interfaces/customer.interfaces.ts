import { z } from "zod";
import { customerCreateSchema, customerReadSchema, customerSchema, customerWithoutPassSchema } from "../schemas";
import { Customer } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type iCustomer = z.infer<typeof customerSchema>;

type iCustomerCreate = z.infer<typeof customerCreateSchema>;
type iCustomerRead = z.infer<typeof customerReadSchema>
type iCustomerReturn = z.infer<typeof customerWithoutPassSchema>;
type iCustomerUpdate = DeepPartial<Customer>;

type iCustomerRepo = Repository<Customer>;

export { iCustomer, iCustomerCreate, iCustomerRead, iCustomerReturn, iCustomerUpdate, iCustomerRepo }