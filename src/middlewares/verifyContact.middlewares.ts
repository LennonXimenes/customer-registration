import { NextFunction, Request, Response } from "express";
import { contactRepo, customerRepo } from "../repositories";
import { Contact, Customer } from "../entities";
import { AppError } from "../errors";

export const verifyContact = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id: number = Number(req.params.id);

    const foundContact: Contact | null = await contactRepo.findOneBy({ id });

    if (!foundContact) {
        throw new AppError("Customer not found", 404);
    };

    res.locals = { ...res.locals, foundContact };

    return next();
};