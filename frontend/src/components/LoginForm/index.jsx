import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { useContext, useState } from "react";
import { CustomerContext } from "../../providers/CustomerContext";
import { Link } from "react-router-dom";
import { StyledBoxBtn, StyledForm } from "./style";
import { FontTitle } from "../../styles/typograph";
import { toastError } from "../Toast";
import loginUserSchema from "./loginUserSchema";
import { zodResolver } from "@hookform/resolvers/zod";


export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(loginUserSchema)
    });
    const [loading, setLoading] = useState(false);

    const { customerLogin } = useContext(CustomerContext);

    const submit = (formData) => {
        customerLogin(formData, setLoading);
    };

    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
            <FontTitle>Faça seu login</FontTitle>
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

            <StyledBoxBtn>
                <button type="submit" disabled={loading}>
                    {loading ? "Entrando.." : "Entrar"}
                </button>
                <button><Link to="register">Cadastrar</Link></button>
            </StyledBoxBtn>

        </StyledForm>

    );
};