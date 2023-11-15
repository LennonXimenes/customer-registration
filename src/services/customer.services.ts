import { Customer } from "../entities";
import { iCustomerCreate, iCustomerRead, iCustomerUpdate } from "../interfaces";
import { customerRepo } from "../repositories";

const readCustomer = async (): Promise<iCustomerRead> => {
    return await customerRepo.find();
};

const createCustomer = async (payload: iCustomerCreate): Promise<Customer> => {
    return await customerRepo.save(payload);
};

const updateCustomer = async (customer: Customer, payload: iCustomerUpdate): Promise<Customer> => {
    return await customerRepo.save({ ...customer, ...payload });
};

const deleteCustomer = async (customer: Customer): Promise<void> => {
    await customerRepo.remove(customer);
};

export default { readCustomer, createCustomer, updateCustomer, deleteCustomer };