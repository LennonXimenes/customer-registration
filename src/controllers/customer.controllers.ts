import { Request, Response } from "express";
import { Customer } from "../entities";
import customerServices from "../services/customer.services";
import { iCustomerRead } from "../interfaces";

const readCustomer = async (req: Request, res: Response): Promise<Response> => {
    const customers: iCustomerRead = await customerServices.readCustomer();

    return res.status(200).json(customers);
};

const retrieveCustomer = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json(res.locals.foundCustomer);
};

const createCustomer = async (req: Request, res: Response): Promise<Response> => {
    const customer: Customer = await customerServices.createCustomer(req.body);

    return res.status(201).json(customer);
};

const updateCustomer = async (req: Request, res: Response): Promise<Response> => {
    const { foundCustomer } = res.locals;
    const { body } = req;

    const customer: Customer = await customerServices.updateCustomer(foundCustomer, body);

    return res.status(200).json(customer);
};

const deleteCustomer = async (req: Request, res: Response): Promise<Response> => {
    await customerServices.deleteCustomer(res.locals.foundCustomer);

    return res.status(204).json();
};

export default { readCustomer, retrieveCustomer, createCustomer, updateCustomer, deleteCustomer };