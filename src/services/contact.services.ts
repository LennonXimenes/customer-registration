import { Contact, Customer } from "../entities";
import { iContactCreate, iContactRead, iContactUpdate } from "../interfaces";
import { contactRepo } from "../repositories";
import { contactSchema } from "../schemas";

const readContact = async (): Promise<iContactRead> => {
    return await contactRepo.find();
};

const createContact = async (payload: iContactCreate, customer: Customer): Promise<any> => {
    const contact: Contact = contactRepo.create({ ...payload, customer });

    await contactRepo.save(contact);

    return contactSchema.parse(contact);
};

const updateContact = async (contact: Contact, payload: iContactUpdate): Promise<Contact> => {
    return await contactRepo.save({ ...contact, ...payload });
};

const deleteContact = async (contact: Contact): Promise<void> => {
    await contactRepo.remove(contact);
};

export default { readContact, createContact, updateContact, deleteContact };