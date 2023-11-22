import { compare } from "bcryptjs";
import { Customer } from "../entities";
import { AppError } from "../errors";
import { iSessionCreate, iSessionReturn } from "../interfaces";
import { customerRepo, } from "../repositories";
import { sign } from "jsonwebtoken";

const loginSession = async ({ email, password }: iSessionCreate): Promise<iSessionReturn | any> => {
    const foundCustomer: Customer | null = await customerRepo.findOneBy({ email });

    if (!foundCustomer) throw new AppError("E-mail/senha inválido", 401);

    const samePassword: boolean = await compare(password, foundCustomer.password);

    if (!samePassword) throw new AppError("E-mail/senha inválido", 401);

    const token: string = sign(
        { admin: foundCustomer.admin },
        process.env.SECRET_KEY!,
        { subject: foundCustomer.id.toString(), expiresIn: process.env.EXPIRES_IN! }
    );

    return { token, customer: foundCustomer };
};

export default { loginSession };