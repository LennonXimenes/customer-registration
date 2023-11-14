import { Customer } from "../entities"
import { AppDataSource } from "../data-source";
import { iCustomerCreate, iCustomerRead, iCustomerRepo } from "../interfaces";
import { customerRepo } from "../repositories";
import { AppError } from "../errors";

const readCustomer = async (): Promise<iCustomerRead> => {
    return await customerRepo.find();
};

const retrieveCustomer = async (customerId: number): Promise<Customer> => {
    const customer: Customer | null = await customerRepo.findOne({ where: { id: customerId } });

    if (!customer) {
        throw new AppError("Customer not found", 404);
    };

    return customer;
};

const createCustomer = async (payload: iCustomerCreate): Promise<Customer> => {
    return await customerRepo.save(payload);
};

const deleteCustomer = async (customerId: number): Promise<void> => {
    const customer: Customer | null = await customerRepo.findOne({ where: { id: customerId } });

    if (!customer) {
        throw new AppError("Customer not found", 404);
    };

    await customerRepo.remove(customer);
};


export default { readCustomer, retrieveCustomer, createCustomer };