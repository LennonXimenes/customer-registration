import { AppDataSource } from "./data-source";
import { Customer } from "./entities";
import { iCustomerRepo } from "./interfaces";

const customerRepo: iCustomerRepo = AppDataSource.getRepository(Customer);

export { customerRepo };