import { Request, Response } from "express";
import { Contact, Customer } from "../entities";
import contactServices from "../services/contact.services";
import { iContactRead } from "../interfaces";

const readContact = async (req: Request, res: Response): Promise<Response> => {
    const contact: iContactRead = await contactServices.readContact();

    return res.status(200).json(contact);
};

const retrieveContact = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.id);

    const contact = await contactServices.retrieveContact(id);

    return res.status(200).json(contact);
};

const createContact = async (req: Request, res: Response): Promise<Response> => {
    const customer: Customer = res.locals.foundId;

    const contact = await contactServices.createContact(req.body, customer);

    return res.status(201).json(contact);
};

const updateContact = async (req: Request, res: Response): Promise<Response> => {
    const { foundContact } = res.locals;
    const { body } = req;

    const contact: Contact = await contactServices.updateContact(foundContact, body);

    return res.status(200).json(contact);
};

const deleteContact = async (req: Request, res: Response): Promise<Response> => {
    await contactServices.deleteContact(res.locals.foundContact);

    return res.status(204).json();
};

export default { readContact, retrieveContact, createContact, updateContact, deleteContact };