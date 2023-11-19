import { AppDataSource } from "./data-source";
import { Contact, Customer } from "./entities";
import { iCustomerRepo } from "./interfaces";
import { iContactRepo } from "./interfaces/contact.interfaces";

const customerRepo: iCustomerRepo = AppDataSource.getRepository(Customer);
const contactRepo: iContactRepo = AppDataSource.getRepository(Contact);

export { customerRepo, contactRepo };