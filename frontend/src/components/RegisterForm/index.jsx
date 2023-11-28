import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm";
import { Input } from "../Input";
import { CustomerContext } from "../../providers/CustomerContext";
import { useContext } from "react";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const { customerRegister } = useContext(CustomerContext);

    const submit = (FormData) => {
        customerRegister(FormData);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Nome Completo"
                type="text"
                placeholder="Seu nome completo"
                {...register("fullName")}
                error={errors.fullName}
            />

            <Input
                label="E-mail"
                type="email"
                placeholder="Seu e-mail"
                {...register("email")}
                error={errors.email}
            />

            <Input
                label="Senha"
                type="password"
                placeholder="Sua senha"
                {...register("password")}
                error={errors.password}
            />

            <Input
                label="Confirmar senha"
                type="password"
                placeholder="Sua senha novamente"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
            />

            <Input
                label="Telefone"
                type="text"
                placeholder="Seu telefone"
                {...register("phone")}
                error={errors.phone}
                maxLength={11}
            />

            <button type="submit">submit</button>
        </form>
    );
};