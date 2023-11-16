import { Request, Response } from "express";
import { Customer } from "../entities";
import customerServices from "../services/customer.services";
import { iCustomerRead, iCustomerReturn } from "../interfaces";
import { customerWithoutPassSchema } from "../schemas";

const readCustomer = async (req: Request, res: Response): Promise<Response> => {
    const customers: iCustomerRead = await customerServices.readCustomer();

    return res.status(200).json(customers);
};

const retrieveCustomer = async (req: Request, res: Response): Promise<Response> => {
    const customer: Customer = res.locals.foundId;

    return res.status(200).json(customerWithoutPassSchema.parse(customer));
};

const createCustomer = async (req: Request, res: Response): Promise<Response> => {
    const customer: iCustomerReturn = await customerServices.createCustomer(req.body);

    return res.status(201).json(customer);
};

const updateCustomer = async (req: Request, res: Response): Promise<Response> => {
    const { foundId } = res.locals;
    const { body } = req;

    const customer: Customer = await customerServices.updateCustomer(foundId, body);

    return res.status(200).json(customerWithoutPassSchema.parse(customer));
};

const deleteCustomer = async (req: Request, res: Response): Promise<Response> => {
    await customerServices.deleteCustomer(res.locals.foundId);

    return res.status(204).json();
};

export default { readCustomer, retrieveCustomer, createCustomer, updateCustomer, deleteCustomer };