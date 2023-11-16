import { Customer } from "../entities";
import { iCustomerCreate, iCustomerRead, iCustomerReturn, iCustomerUpdate } from "../interfaces";
import { customerRepo } from "../repositories";
import { customerReadSchema, customerWithoutPassSchema } from "../schemas";

const readCustomer = async (): Promise<iCustomerRead> => {
    return customerReadSchema.parse(await customerRepo.find());
};

const createCustomer = async (payload: iCustomerCreate): Promise<iCustomerReturn> => {
    const customer: Customer = customerRepo.create(payload);

    await customerRepo.save(customer)

    return customerWithoutPassSchema.parse(customer)
};

const updateCustomer = async (customer: Customer, payload: iCustomerUpdate): Promise<Customer> => {
    return await customerRepo.save({ ...customer, ...payload });
};

const deleteCustomer = async (customer: Customer): Promise<void> => {
    await customerRepo.remove(customer);
};

export default { readCustomer, createCustomer, updateCustomer, deleteCustomer };