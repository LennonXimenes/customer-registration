import { Repository } from "typeorm";
import { Customer } from "../entities"
import { AppDataSource } from "../data-source";

const createCustomer = async (payload: Omit<Customer, "id">): Promise<Customer> => {
    const repo: Repository<Customer> = AppDataSource.getRepository(Customer);

    const customer: Customer = await repo.save(payload)

    return customer;
}

const readCustomer = async (): Promise<Array<Customer>> => {
    const repo: Repository<Customer> = AppDataSource.getRepository(Customer);

    const customer: Array<Customer> = await repo.find();

    return customer;
}

export default { createCustomer, readCustomer }