import { Request, Response } from "express";
import { Contact, Customer } from "../entities";
import customerServices from "../services/customer.services";
import { iCustomerRead, iCustomerReturn } from "../interfaces";
import { customerWithoutPassSchema } from "../schemas";
import { customerRepo } from "../repositories";

const readCustomer = async (req: Request, res: Response): Promise<Response> => {
    const customers: iCustomerRead = await customerServices.readCustomer();

    return res.status(200).json(customers);
};

const retrieveCustomer = async (req: Request, res: Response): Promise<Response> => {
    const customer: number = res.locals.foundId;

    return res.status(200).json(customerWithoutPassSchema.parse(customer));
};

const retrieveCustomerWithContacts = async (req: Request, res: Response): Promise<Response> => {
    const customerId: number = res.locals.foundId.id;

    const customer: Customer | any = await customerRepo.findOne({
        where: { id: customerId },
        relations: ["contacts"]
    });

    const customerWithContacts = {
        id: customer.id,
        fullName: customer.fullName,
        email: customer.email,
        phone: customer.phone,
        createdAt: customer.createdAt,
        contacts: customer.contacts.map((contact: Contact) => ({
            id: contact.id,
            fullName: contact.fullName,
            email: contact.email,
            phone: contact.phone,
            createdAt: contact.createdAt
        }))
    };

    return res.status(200).json(customerWithContacts);
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

export default { readCustomer, retrieveCustomer, retrieveCustomerWithContacts, createCustomer, updateCustomer, deleteCustomer };