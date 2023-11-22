import { Request, Response } from "express";
import { iSessionReturn } from "../interfaces";
import sessionService from "../services/session.service";

const loginSession = async (req: Request, res: Response): Promise<Response> => {
    const { token, customer }: iSessionReturn | any = await sessionService.loginSession(req.body);

    return res.status(200).json({ token, customer });
}

export default { loginSession };