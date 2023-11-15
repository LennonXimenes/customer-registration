import { NextFunction, Request, Response } from "express";
import { customerRepo } from "../repositories";
import { Customer } from "../entities";
import { AppError } from "../errors";

export const verifyId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const foundCustomer: Customer | null = await customerRepo.findOneBy({ id: Number(req.params.customerId) });

    if (!foundCustomer) {
        throw new AppError("Customer not found", 404);
    };

    res.locals = { ...res.locals, foundCustomer };

    return next();
};