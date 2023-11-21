import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerForm";
import { Input } from "../Input";
import { api } from "../../services";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema),
    });

    const customerRegister = async (FormData) => {
        try {
            const { data } = await api.post("/customer", FormData);
            console.log("Cadastro efetuado com sucesso!")

        } catch (error) {
            console.error(error);
        };
    };

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
            />

            <button type="submit">submit</button>
        </form>
    );
};