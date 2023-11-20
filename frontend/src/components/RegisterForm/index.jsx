import { useForm } from "react-hook-form";

/*
{
    "fullName": "Lennon de Abreu Ximenes",
    "email": "lennon@mail.com",
    "password": "1234",
    "phone": "24912345678"
}
*/

export const RegisterForm = () => {
    const { register, handleSubmit } = useForm();

    const submit = (FormData) => {
        console.log(FormData);
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <input type="text" {...register("fullName")} />
                <p></p>
                <input type="email" {...register("email")} />
                <p></p>
                <input type="password" {...register("password")} />
                <p></p>
                <input type="password" {...register("confirm")} />
                <p></p>
                <input type="phone" {...register("phone")} />
                <p></p>
            </div>
            <button type="submit">submit</button>
        </form>
    );
}