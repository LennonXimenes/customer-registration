import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { useContext } from "react";
import { CustomerContext } from "../../providers/CustomerContext";
import { ContactContext } from "../../providers/ContactContext";

export const CreateContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { customer } = useContext(CustomerContext);
    const { CreateContact } = useContext(ContactContext);

    const submit = (formData) => {
        CreateContact(formData);
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
                label="Telefone"
                type="text"
                placeholder="Seu telefone"
                {...register("phone")}
                error={errors.phone}
            />
            <button type="submit">Criar contato</button>
        </form>
    );
};