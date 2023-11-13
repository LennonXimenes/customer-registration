import { Request, Response } from "express";
import { Customer } from "../entities";
import customerServices from "../services/customer.services";

const createCustomer = async (req: Request, res: Response): Promise<Response> => {
    const customer: Customer = await customerServices.createCustomer(req.body);

    return res.status(201).json(customer);
}

const readCustomer = async (req: Request, res: Response): Promise<Response> => {
    const customers: Array<Customer> = await customerServices.readCustomer();

    return res.status(200).json(customers);
}

export default { createCustomer, readCustomer }