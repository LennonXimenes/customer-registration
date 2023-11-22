import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { useContext } from "react";
import { CustomerContext } from "../../providers/CustomerContext";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { customerLogin } = useContext(CustomerContext);

    const submit = (formData) => {
        customerLogin(formData);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <h1>Faça seu login</h1>
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

            <button>Submit</button>
        </form>

    );
};