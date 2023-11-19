import { NextFunction, Request, Response } from "express";
import { customerRepo } from "../repositories";
import { Customer } from "../entities";
import { AppError } from "../errors";

export const verifyId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id: number = Number(req.params.id);

    const foundId: Customer | null = await customerRepo.findOneBy({ id });

    if (!foundId) {
        throw new AppError("Customer not found", 404);
    };

    res.locals = { ...res.locals, foundId };

    return next();
};